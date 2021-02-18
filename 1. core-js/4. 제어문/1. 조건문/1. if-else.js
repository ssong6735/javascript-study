

var point = 30;
console.log(`점수: ${point}점`);

/*
if (point >= 60) {
    console.log('60점 이상입니다.');
    console.log('합격하셨습니다!');
}
if (point < 60) {
    console.log('60점 미만입니다.');
    console.log('불합격하셨습니다 ㅠㅠ');
}
*/

if (point >= 60) {
    console.log('60점 이상입니다.');
    console.log('합격하셨습니다!');
}
else { // 단독으로 사용 불가, else 뒤에는 (조건)을 사용할 수 없음
    console.log('60점 미만입니다.');
    console.log('불합격하셨습니다 ㅠㅠ');
}
console.log('수고하셨습니다!');