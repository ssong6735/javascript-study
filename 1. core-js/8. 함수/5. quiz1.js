/*
Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 반환하는
   함수 calcNumbersTotalAndAverage를 정의하세요.
* /

// 360과 90이 리턴되어야 함!

function calcNumbersTotalAndAverage() {
    var total = 0;
    var avg = 0;

    total = 

    result {
      total : ,
      avg:   
    };
}

* / 

function calcNumbersTotalAndAverage(...numbers) {
    var total = 0;
    for (var n of numbers)
        total += n;
    var avg = total / numbers.length;
    // return {
    //     total: total,
    //     avg: avg
    // };
    // ES6 부터 객체 프로퍼티의 값이 동일할때 하나만 써도 가능.
    return { total, avg } // total:total, avg:avg
}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90);
console.log(`총합: ${result.total}, 평균: ${result.avg}`);
*/

// quiz1 문제 화살표함수로 변경해보기
var calcNumbersTotalAndAverage = (...numbers) => {
    var total = 0;
    for (var n of numbers)
        total += n;
    var avg = total / numbers.length;
    return { total, avg } // total:total, avg:avg
}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90);
console.log(`총합: ${result.total}, 평균: ${result.avg}`);
