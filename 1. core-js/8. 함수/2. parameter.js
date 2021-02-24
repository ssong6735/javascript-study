

// begin 부터 end 까지의 총합을 구해주는 함수
function calcRangeTotal(begin, end) { // 매개변수는 앞에 var를 쓰지 않는다.
    console.log(`begin: ${begin}`);
    console.log(`end: ${end}`);
    var total = 0;
    for (var n=begin; n<=end; n++) {
        total += n;
    }
    return total;
}

function sayHello(language='한국어') { // ES6

    // ~ ES5
    //language = language || '한국어';

    if (language === '한국어') {
        console.log('안녕하세요.');
    } else if (language === '영어') {
        console.log('헬로~');
    } else if (language === '일본어') {
        console.log('곤니찌와');
    }
}

function selectRandomFood() { // 매개변수가 없는 함수. ()를 비운채로 사용.
    var rn = Math.random();
    return rn > 0.5 ? '짜장면' : '짬뽕';
}

function multiply(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        console.log('숫자를 전달하세요!');
        return;
    }
    return n1 * n2;
}

var res = multiply('안녕',20);
console.log(res);

console.log(`랜덤음식: ${selectRandomFood()}`);



sayHello();
sayHello('일본어');

// 함수 호출
var totalNumber = calcRangeTotal(10,30);
console.log(`함수 실행 결과값: ${totalNumber}`);

