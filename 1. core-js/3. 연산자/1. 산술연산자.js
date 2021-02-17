
//js의 경우 % 하면 소수점까지 표현
console.log(27 % 5);
console.log(4 % 10);


var num = 3;
console.log(num ** 3); //ES7 문법
console.log(Math.pow(num,3)); //ES7 이전 문법

num ** 3 ** 4;
Math.pow(Math.pow(num, 3), 4);


//단항 산술 연산자 ++, --
console.log("================================");

var x = 3;
x++;
x++;
x--;
console.log(`x: ${x}`);

//전위 연산(prefix), 후위 연산(postfix)
console.log("===============================");

var a = 10, result;
result = a++; //후위 연산은 선할당 후연산
console.log(`result: ${result}, a: ${a}`); // 10 11

result = ++a; //전위 연산은 선연산 후할당
console.log(`result: ${result}, a: ${a}`); // 12 12


result = a--;
console.log(`result: ${result}, a: ${a}`); // 12 11

result = --a;
console.log(`result: ${result}, a: ${a}`); // 10 10