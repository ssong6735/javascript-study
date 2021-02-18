

// 랜덤값 (난수) 생성 함수
// Math.random() : 0.0이상 1.0미만의 랜덤값 생성

var rn = Math.random();
console.log(`랜덤값: ${rn}`);


if (rn > 0.66) {
    console.log('오늘은 짜장면!');
} else if ( rn > 0.33) {
    console.log('오늘은 족발!');
} else {
    console.log('오늘은 새우깡!');
}



// Math.floor() : 내림값, Math.ceil() : 올림값, Math.round() : 반올림값
console.log('================================');
console.log(Math.floor(3.4));
console.log(Math.ceil(5.1));
console.log(Math.round(7.6));

console.log('================================');

// 0이상 10이하의 랜덤 정수 만들기
/*
Math.random()                      -> 0.0 <== ~ < 1.0
Math.random() * 10                 -> 0.0 <== ~ < 10.0
Math.floor(Math.random() * 10)     -> 0 <= ~ < 10
Math.floor(Math.random() * 10) + 1 -> 1 <= ~ < 11
*/



console.log('================================');
var ri = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤 정수: ${ri}`);


/*
    # 랜덤 정수 공식 : x 이상 y 이하의 랜덤 정수 생성
    - Math.floor(Math.random() * (y - x + 1)) + x;

    # 랜덤 정수 공식 : 최소값 이상 최대값 이하의 랜덤 정수 생성
    - Math.floor(Math.random() * (최대값 - 최소값 + 1)) + 최소값;
*/


// 15 ~ 37 의 랜덤 값
// Math.floor(Math.random() * (37 - 15 + 1)) + 15;
Math.floor(Math.random() * 23) + 15;