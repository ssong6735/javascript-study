// 일정 데이터가 들어 있는 배열 선언
const todos = [
    {
        id: 1, // 기본키 (특정 데이터 관리위해 지정)
        text: '할 일 1',
        done: false
    },
    {
        id: 2, // 기본키 (특정 데이터 관리위해 지정)
        text: '할 일 2',
        done: false
    },
    {
        id: 3, // 기본키 (특정 데이터 관리위해 지정)
        text: '할 일 3',
        done: false
    }
];

// 추가될 할 일 객체의 id를 생성해주는 함수 정의
function makeNewId() {

    if (todos.length > 0) {
        // const lastIndex = todos.length - 1;
        // console.log(todos[lastIndex].id + 1);
        return todos[todos.length - 1].id + 1;
    } else {
        return 1;
    }
}

// 화면에 렌더링할 .todo-list-item 노드를 생성하는 함수 정의
function makeNewToDoNode(newToDo) {
    const $li = document.createElement('li');
    const $label = document.createElement('label');
    const $divMod = document.createElement('div');
    const $divRem = document.createElement('div');

    // label 태그 작업
    $label.classList.add('checkbox');
    $label.innerHTML = `<input type="checkbox">
    <span class="text">${newToDo.text}</span>`;
    
    // 수정 div 태그 작업
    $divMod.classList.add('modify');
    $divMod.innerHTML = `<span class="lnr lnr-undo"></span>`;

    // 삭제 div 태그 작업
    $divRem.classList.add('remove');
    $divRem.innerHTML = `<span class="lnr lnr-cross-circle"></span>`;

    // li 태그 작업
    $li.dataset.id = newToDo.id;
    $li.classList.add('todo-list-item');
    
    for (let $element of [$label, $divMod, $divRem]) {
        $li.appendChild($element);
    }
    // console.log($li);
    document.querySelector('.todo-list').appendChild($li);
}

// 할 일 추가 처리 함수 정의
function insertToDoData() {

    const $todoText = document.getElementById('todo-text');

    // 필수 입력란이 공백인지 검증
    // trim(): 문자열의 앞뒤 공백을 제거
    if ($todoText.value.trim() === '') { 
        $todoText.style.background = 'orangered';
        $todoText.setAttribute('placeholder', '필수 입력사항 입니다!');
        $todoText.value = '';
        // console.log('null');
        return;
    } else {
        $todoText.setAttribute('placeholder', '할 일을 입력하세요.');
        // $todoText.removeAttribute('style');
        $todoText.style.background = '';
    }

    //1. todos 배열에 객체를 생성한 후 push
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newToDo); // 서버연결시에 DB로 전달하고 꺼내오기 해야 함.
    // console.log(todos);

    //2. 추가된 데이터를 화면에 렌더링
    makeNewToDoNode(newToDo);

    //3. 입력 완료 후 잔존 문자열 제거
    $todoText.value = '';
}

// data-id 값으로 배열을 탐색하여 일치하는 객체가 들어있는 인덱스를 반환
function findIndexByDataId(dataId) {
    // console.log('dataId:', typeof dataId);

    for (let i=0; i<todos.length; i++) {
        if (dataId === todos[i].id) {
            return i;
        }
    }
    return null; // 못 찾았다는 증거
}

// 할 일 완료 처리 수행 함수 정의
function changeCheckState($label) {
    //1. 체크가 된 곳의 label 태그에 checked 클래스를 추가해야 함.
    //2. label 노드를 얻어야 한다. 근데 그냥 label이 아니라 그 체크된
    //   체크박스의 부모 label 이어야 함. 이벤트 핸들러한테 받아오자.($label)
    //3. 그 label에 클래스를 추가해보자
    $label.classList.toggle('checked');
    //4. 실제로 서버가 있었다면 서버에도 완료 상태를 반영해야 함.
    //   todos 배열의 할일 객체의 done 값을 true로 바꿔줘야 함.
    //5. 이 함수에서 알고 있는 정보는 클릭된 체크박스의 label을 알고 있음.
    //6. 근데 우리가 배열에서 특정 객체를 꺼낼려면 id 프로퍼티 값을 알아야 함.
    //7. label 을 알고있다면 그 부모태그 li에 접근할 수 있고 그곳의 data-id를 조회하면 객체 id 값을 얻어낼 수 있다.
    // console.log($label.parentNode.dataset.id);
    const dataId = +$label.parentNode.dataset.id;
    // 태그 데이터 저장 (data-id가 스트링이기 때문에 앞에 + 를 붙여준다.)

    //8. dataId를 기반으로 배열을 탐색하여 data-id와 일치하는 
    //   id 프로퍼티를 가진 객체의 인덱스를 얻어와야 함.
    const index = findIndexByDataId(dataId);
    // console.log('idx:', index);

    //9. 해당 인덱스로 특정 객체에 접근하여 done의 값을 변환
    if (index !== null) {
        todos[index].done = !todos[index].done;
    }
    // console.log(todos);
}

// 할 일 삭제 처리 함수 정의
function removeToDoData($delTarget) {
    //1. 삭제를 하려면 ul에서 li를 지워야 함.
    //2. 지우려면 ul 노드랑 삭제대상 li의 노드를 받아야 함.    
    document.querySelector('.todo-list').removeChild($delTarget);

    const index = findIndexByDataId(+$delTarget.dataset.id);
    if (index !== null) {
        todos.splice(index, 1);
    }
    // console.log(todos);
}

// 수정 모드 진입 이벤트 처리 함수 정의
function enterModifyMode($modSpan) {
    // 수정 모드진입 버튼을 교체 (lnr-undo -> lnr-checkmark-circle)
    $modSpan.classList.replace('lnr-undo', 'lnr-checkmark-circle');
    
    // span.text를 input 태그로 교체
    const $label = $modSpan.parentNode.previousElementSibling;
    // console.log($label);
    const $textSpan = $label.lastElementChild;
    
    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.classList.add('mod-input');
    $modInput.setAttribute('value', $textSpan.textContent);
    
    // replaceChild(new, old);
    $label.replaceChild($modInput, $textSpan);
}

// 수정 완료 처리 이벤트
function modifyToDoData($modCompleteSpan) {
    // 버튼을 원래대로 돌림 (lnr-checkmark-circle -> lnr-undo)
    $modCompleteSpan.classList.replace('lnr-checkmark-circle', 'lnr-undo');
    
    // input을 다시 span.text로 변경    
    const $label = $modCompleteSpan.parentNode.previousElementSibling;
    const $modInput = $label.lastElementChild;
    
    const $textSpan = document.createElement('span');
    $textSpan.classList.add('text');
    $textSpan.textContent = $modInput.value;
    
    // replaceChild(new, old);
    $label.replaceChild($textSpan, $modInput);

    // todos 배열 데이터 수정
    const index = findIndexByDataId(+$label.parentNode.dataset.id);
    if (index != null) {
        todos[index].text = $textSpan.textContent;
    }     
}


//////////////////////////////////////////////////////////////////////////
// 메인 즉시 실행 함수
// (function () {} ());
(function () {

    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');

    $addBtn.addEventListener('click', e => {
        e.preventDefault(); // submit 버튼의 서버전송 기능 중지
        // console.log('추가 버튼 클릭 됨!');

        insertToDoData();
    });

    // 할 일 완료(체크박스) 이벤트
    const $todoList = document.querySelector('ul.todo-list');

    $todoList.addEventListener('change', e => {

        if (!e.target.matches('.todo-list label.checkbox input[type=checkbox]')) {
            return;
        }
        // console.log('체크박스 이벤트 실행됨!');
        // console.log(e.target.nextElementSibling.textContent);
        changeCheckState(e.target.parentNode);
        // 체크박스의 부모노드
    });

    // 할 일 삭제 이벤트
    $todoList.addEventListener('click', e => {
        // console.log(e.target); => span
        if (!e.target.matches('.todo-list .remove span')) {
            return;
        }
        // console.log('삭제 버튼 클릭 이벤트 발생!');
        // console.log(e.target.parentNode.parentNode);
        if (confirm('진짜 삭제 하시겠습니까?')) {
            removeToDoData(e.target.parentNode.parentNode);
        }
    });

    // 할 일 수정 이벤트
    $todoList.addEventListener('click', e => {
        if (e.target.matches('.todo-list .modify span.lnr-undo')) {
            // console.log('수정 모드 진입 이벤트');
            enterModifyMode(e.target);
        } else if (e.target.matches('.todo-list .modify span.lnr-checkmark-circle')) {
            // console.log('수정 완료 이벤트');
            modifyToDoData(e.target);
        } else {
            return;
        }
    });

} ());
