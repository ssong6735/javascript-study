

// 게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null, // 사용자가 클릭한 숫자
    min: 1,
    max: 100
};

// 숫자 아이콘 생성 함수
function makeNumberIcons() {
    const $numbers = document.getElementById('numbers');
    const $frag = document.createDocumentFragment();

    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div');
        $icon.classList.add('icon');
        $icon.textContent = i;
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);
    return $numbers;
}

// 아이콘 전체 삭제 함수 정의
function clearNumberIcons($numbers) {
    for (let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
}

// 정답을 판별해주는 함수 정의
function checkAnswer($numbers) {
    // 객체 디스트럭쳐링
    const {secret, answer} = gameDatas;

    const $begin = document.getElementById('begin');
    const $end = document.getElementById('end');

    if (secret === answer) {
        // console.log('정답!');
    } else if (secret < answer) {
        // console.log('DOWN!');
        gameDatas.max = answer - 1;
        $end.textContent = answer;        
    } else {
        // console.log('UP!!');
        gameDatas.min = answer + 1;                
        $begin.textContent = answer;        
    }
    // console.log(gameDatas);

    // 정답 판별 이후 아이콘 재배치
    clearNumberIcons($numbers); // 현재 렌더링 되어있는 아이콘들 전체 삭제
    makeNumberIcons(); // min, max 변화대로 재배치
}




// 핵심 실행 로직 즉시 실행 함수
(function() {

    const $numbers = makeNumberIcons();

    // 숫자 아이콘 클릭 이벤트
    $numbers.addEventListener('click', e => {

        if (!e.target.matches('#numbers > .icon')) {
            return;
        }
        console.log(`${e.target.textContent} 클릭 됨!`);
        gameDatas.answer = +e.target.textContent;
        // 문자열을 숫자로 바꾸기 위해 '+' 를 붙여준다.
        // console.log(gameDatas);

        // 정답 체크 함수 호출
        checkAnswer($numbers);
    });

} ());