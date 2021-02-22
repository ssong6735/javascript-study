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

/*
var right = 0;
var wrong = 0;

while (true) {
   var rn1 = Math.floor(Math.random() * 100) + 1;
   var rn2 = Math.floor(Math.random() * 100) + 1;
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
*/

/*
// 홍쌤 풀이1

// 정오답 카운트
var correctCount = 0, incorrectCount = 0;

while (true) {

   // 1 이상 100 이하의 랜덤 정수
   var first = Math.floor(Math.random() * 100) + 1;
   var second = Math.floor(Math.random() * 100) + 1;

   // 사용자가 입력한 답
   var userAnwser = +prompt(`${first} + ${second} = ??`);
   console.log('userAnswer: ' + userAnwser);

   // 탈출조건 (0입력시)
   if (userAnwser === 0) {
      break;
   }

   // 실제 정답
   var realAnswer = first + second;

   // 정오답 판별
   if (userAnwser === realAnswer) {
      alert('정답입니다!');
      correctCount++;
   } else {
      alert('오답입니다!');
      incorrectCount++;
   }

} // end while

alert(`프로그램이 종료되었습니다.
# 정답 횟수: ${correctCount}회, 오답 횟수: ${incorrectCount}회`);
*/

// 홍쌤 풀이2

//정답 횟수 오답 횟수 저장변수
var correctCount = 0, incorrectCount = 0;

while (true) {
    //1 이상 20이하의 랜덤 정수
    var first = Math.floor(Math.random() * 20) + 1;
    var second = Math.floor(Math.random() * 20) + 1;

    //0 1 2 의 랜덤정수 생성
    var operatorNum = Math.floor(Math.random() * 3);

    //랜덤 연산 부호 생성
    var operatorMark;
    if (operatorNum === 0) {
        operatorMark = '+';
    } else if (operatorNum === 1) {
        operatorMark = '-';
    } else {
        operatorMark = 'x';
    }

    //사용자가 입력한 답
    var userAnwser = +prompt(`${first} ${operatorMark} ${second} = ??`);
    // console.log("userAnswer: " + userAnwser);

    //탈출조건 (0입력시)
    if (userAnwser === 0) {
        break;
    }

    //실제 정답
    var realAnswer;
    if (operatorMark === '+') {
        realAnswer = first + second;
    } else if (operatorMark === '-') {
        realAnswer = first - second;
    } else {
        realAnswer = first * second;
    }

    //정오답 판별
    if (userAnwser === realAnswer) {
        alert('정답입니다!');
        correctCount++;
    } else {
        alert('오답입니다!');
        incorrectCount++;
    }
}//end while

alert(`프로그램이 종료되었습니다.
# 정답 횟수: ${correctCount}회, 틀린 횟수: ${incorrectCount}회`);