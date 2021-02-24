

// 함수 정의
// 함수 이름은 동사적 기능이 내포될 수 있게 지어준다.
function calculateTotal(x) {
    var total = 0;
    for (var n=1; n<=x; n++) {
        total += n;
    }
    return total;
}


// 함수 선언방법 1
function add1(n1, n2) {
    return n1 + n2;
}

// 함수 선언방법 2
// 함수 리터럴 (리터럴은 끝에 ; 찍어준다.)
// 함수에 이름이 없음(익명함수) - 변수에 저장이 될때 이름이 생김.
var add2 = function(n1, n2) {
    return n1 + n2;
};

// 함수 선언방법 3
// 화살표 함수 (ES6)
var add3 = (n1,n2) => n1 + n2;

console.log(add1(10,20));
console.log(add2(10,20));
console.log(add3(10,20));


// 함수 호출
var result = calculateTotal(10);
console.log(`result: ${result}`);

var result2 = calculateTotal(50);
console.log(`result2: ${result2}`);

var result3 = calculateTotal(100);
console.log(`result3: ${result3}`);


// 함수를 변수에 할당 가능
var ct = calculateTotal; // 함수명 뒤에 ()가 없으면 함수가 아님. 함수의 정보만 가지고 있다.
var result4 = ct(200);
console.log(`result4: ${result4}`);