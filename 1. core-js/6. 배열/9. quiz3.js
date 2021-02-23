/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. tvxq 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']
   을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤
   삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후
   다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 1명을 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

/* 
var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    var delName = prompt(`현재 멤버: [${tvxq}]\n삭제할 이름을 입력하세요.`);

    if (tvxq.includes(delName)) {
        if (confirm(`${delName}: 정말로 삭제 하시겠습니까?`)) { // confirm : 확인(true), 취소(false)
        tvxq.splice(tvxq.indexOf(delName), 1);
        alert(`삭제 완료! \n남은 멤버: [${tvxq}]`)
        break;
        }
    } else {
        alert(`${delName}은(는) 잘못된 이름입니다.\n 다시 입력해주세요.`);
    }
}
*/

// 멤버를 다 지워야 끝나도록 
var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {

    if (tvxq.length === 0) {
        break;
    }

    var delName = prompt(`현재 멤버: [${tvxq}]\n삭제할 이름을 입력하세요.`);

    if (tvxq.includes(delName)) {
        if (confirm(`${delName}: 정말로 삭제 하시겠습니까?`)) { // confirm : 확인(true), 취소(false)
        tvxq.splice(tvxq.indexOf(delName), 1);
        alert(`삭제 완료! \n남은 멤버: [${tvxq}]`)
        }
    } else {
        alert(`${delName}은(는) 잘못된 이름입니다.\n 다시 입력해주세요.`);
    }
}