// return = 함수의 탈출문. 필요에따라 생략할수도 있다.


// 값을 돌려받아 재사용 가능.
function add(n1, n2) {
    return n1 + n2;
    var result = n1 - n2; // return 아래 코드는 실행되지 않는다.
}

// void 함수 : return 값이 없는 함수 = 값을 돌려받지 않고 안에 내용만 실행.
// void 함수는 단독 호출해서 사용할 뿐, 다른 함수의 인자로 전달할 수 없음.
function sub(n1, n2) {
    console.log(`${n1} - ${n2} = ${n1-n2}`);
}

function greeting(nickname) {
    badNick = ['쓰레기', '바보', '양아치'];
    if (badNick.includes(nickname)) {
        console.log('그런 나쁜말은 하지 마세요!');
        return; //탈출문
    }
    console.log(`${nickname}님 안녕하세요!`);
}

// 함수 안에 반복문이 있을경우 break 대신 return 사용 가능.
// 대신 return으로 끝낼경우 반복문도 취소된다. return 아래 코드는 실행되지 않기 때문.
function testFunc() {
    while (true) {
        if (true) {
            break;
        }
    }
    var a = 10;
}

// 기본적으로 return 값은 하나만 반환한다.
// 여러 값을 반환받고 싶으면 객체, 배열로 반환 받는다.
function operationAll(n1, n2) {
    //return [n1+n2, n1-n2, n1*n2, n1/n2]; 
    return {
        plus: add(n1,n2),
        minus: n1-n2,
        multi: n1*n2,
        divide: n1/n2
    };
}


var results = operationAll(10,2);
console.log(results.plus);
console.log(results.minus);
console.log(results.multi);
console.log(results.divide);


greeting('쓰레기');
console.log('====================');


var res1 = add(add(5, 5), add(add(10, 10), add(50, 5)));
// 안쪽부터 실행.
// 1. add(add(5,5), add(20, 55));
// 2. add(10, 75);
console.log(res1);

sub(add(sub(5, 5), add(add(10, 10), add(50, 5))), 10);

console.log('===========================');

sub(30, 55);
var res = sub(30, 17);
console.log(res);

var result = add(5, 8);
var result2 = add(result, result * 2);
console.log(result2);