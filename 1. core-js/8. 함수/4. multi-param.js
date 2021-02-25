

// 2개의 정수의 합을 구하는 함수
function add(n1, n2) {
    return n1 + n2;
}

// 3개의 정수의 합을 구하는 함수
function addFor3(n1, n2, n3) {
    return n1 + n2 + n3;
}

// n개의 정수의 합을 구하는 함수
function addAll(numbers) { // numbers에 배열이나 객체를 넣어준다.
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    return total;
}

// n개의 정수의 합을 구하는 함수
// spread: ES6 배열문법 (... 넣기)
function addAll2(...numbers) { // 인수값에 []를 넣고싶지 않을때 사용.   
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    return total;
}


// n개의 정수의 합을 구하는 함수
// spread: ES6 배열(스프레드)문법 (... 넣기 => ... 두번은 사용할수 없다.) 
function addAll3(name, ...numbers) { // 인수값에 []를 넣고싶지 않을때 사용.
    console.log(`${name}님 안녕~!`);
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    return total;
}



var results3 = addAll3('고길동',10,20,30,40);
console.log(results3);


var results2 = addAll2(10,20,30);
console.log(results2);

var results = addAll([10,20,30]);
console.log(results);