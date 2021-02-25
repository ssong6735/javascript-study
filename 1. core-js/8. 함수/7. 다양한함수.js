
// 기본 형태 : 함수 정의문
function add1(n1,n2) {
    return n1 + n2;
}


// 함수 리터럴 : 함수 표현식
var add2 = function(n1,n2) {
    return n1 + n2;    
};


// 화살표 함수(ES6) : 함수 리터럴의 람다식 형태
var add3 = (n1,n2) => {
    return n1 + n2;    
};


// 함수안에 return문 밖에 없을경우 return을 생략할 수 있다.
var add4 = (n1,n2) => n1+n2;

console.log(add1(5,5));
console.log(add2(5,5));
console.log(add3(5,5));
console.log(add4(5,5));


var greeting1 = function() {
    console.log('hello!');
}
var greeting2 = () => console.log('hello!'); // 한줄일경우 블록 생략 가능

greeting1();
greeting2();


// 즉시실행 함수 (일회용, 익명함수 사용) : 마지막에 한번더 괄호()로 묶어준다.
console.log('================================');

(function(x,y) {
    console.log(`x + y = ${x+y}`);
}(60,70));


// 재귀 함수 : 자기자신을 계속 호출하기 때문에 탈출조건을 만들어준다.
console.log('================================');

function countdown(n) {
    if (n<0) return;
    console.log(n);
    countdown(n-1);
}
countdown(5);

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));
console.log(factorial(6));


// 중첩 함수(inner) : 자신을 감싸는 외부함수를 돕는 헬퍼함수
console.log('================================');

function outer() {

    var x = 1;

    function inner() {
        var y = 2;
        console.log(x+y);
    }
    inner(); // 중첩함수는 외부함수 안에서만 호출가능
}
outer();


