
/*
console.log('1번 회원님 안녕하세요~!');
console.log('2번 회원님 안녕하세요~!');
console.log('3번 회원님 안녕하세요~!');
console.log('4번 회원님 안녕하세요~!');
console.log('5번 회원님 안녕하세요~!');
*/


// 반복문의 필수 3요소
var x = 1; // 1. 제어변수 (반복문의 시작값)

while (x <= 10) { // 2. 반복문 종료 조건문 (반복문의 끝값)
console.log(`${x}번 회원님 안녕하세요~!`);
x++; // 3. 제어변수의 증감식 (반복문의 횟수 제어)
}
console.log('반복문 끝!');