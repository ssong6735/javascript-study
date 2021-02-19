/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/


//# 랜덤 정수 공식 : 최소값 이상 최대값 이하의 랜덤 정수 생성
//- Math.floor(Math.random() * (최대값 - 최소값 + 1)) + 최소값;
// Math.floor(Math.random() * (100 - 0 + 1)) + 0;


var right = 0;
var wrong = 0;

while (true) {
   var rn1 = Math.floor(Math.random() * 101);
   var rn2 = Math.floor(Math.random() * 101);
   var answer = +prompt(`
   문제 : ${rn1} + ${rn2} = ?
   정답을 입력하세요.
   `);

   if (answer === 0) {      
      break;
   }

   if (answer === rn1 + rn2) {
      alert('정답입니다.');
      right++;
   } else {
      alert('오답입니다.');
      wrong++;
   }   
}
alert(`총 정답횟수: ${right}, 총 오답횟수: ${wrong}`);