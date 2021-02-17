/*
아래 코드가 전부 실행 된 이후
a,b,c,d에 할당된 값을 구하세요.
(consloe.log로 확인하지 말것)
*/

var a = 1, b = 1;
var c = ++a;
var d = b++;

// a: 2      b: 2       c: 2     d: 1
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);