
/*
function showNumbers(n) {
    for (var i=1; i<=n; i++) {
        console.log(i);
    }
}

function showEvenNumbers(n) {
    for (var i=1; i<=n; i++) {
        if (i%2 === 0) {
            console.log(i);
        }
    }    
}

function showOddNumbers(n) {
    for (var i=1; i<=n; i++) {
        if (i%2 === 1) {
            console.log(i);
        }
    }    
}
*/

// 콜백 함수 : 매개변수를 통해 다른함수의 내부로 전달되는 함수
function showNumbers(n, func) {
    for (var i=1; i<=n; i++) {
        func(i);
    }
}

//showNumbers(10, (i) => {});
showNumbers(10, function(i) {
    if (i%2 === 0) {
        console.log(i);
    }
});

//화살표 함수에서 매개변수가 하나이면 () 생략 가능.
showNumbers(30, n => {
    if (n%5 === 0) {
        console.log(n + 'hello');
    }
});


console.log('==================================');

var numbers = [1,2,3,4,5,6,7,8,9,10];

function filter(arr, condition) {
    var filtered = [];
    for (var n of arr) {
        if (condition(n)) {
            filtered.push(n);
        }
    }
    return filtered;
}
var filtered = filter(numbers, n => n%2 === 0);
console.log(filtered);


/*
var filtered = numbers.filter(n => n%2 === 1);
console.log(filtered);

//var mapped = numbers.map(n => n**2);
var mapped = [];
for(var n of numbers) {
    mapped.push(n**2);
}
console.log(mapped);
*/





