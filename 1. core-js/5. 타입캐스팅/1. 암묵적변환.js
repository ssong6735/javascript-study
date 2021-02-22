

var ex = 10 + '20'; //(1020) + 를 사용하면 문자로 변환
console.log(`ex: ${ex}`);


ex = 10 * '3'; //(30) + 이외의 연산부호를 사용하면 숫자로 변환
console.log(`ex: ${ex}`);

var ex2 = 100 + ''; // '100'
var ex3 = + '550'; // 550

var ex4 = true + ''; // 'true'
var ex5 = +false; // 0
console.log(`ex5: ${ex5}`);