
// 전역변수와 지역변수는 저장 영역이 다르다.
var x = 'global'; // 전역변수

function foo(y) {
    var x = 'local'; // 지역변수 : 지역변수는 함수 실행이 끝나면 삭제된다.
    console.log(`x: ${x}`);
}
foo('parameter');
console.log(`x: ${x}`);

