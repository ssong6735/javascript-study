var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

// indexOf() : 배열 요소의 인덱스를 찾아서 알려줌.
var idx = foods.indexOf('순대'); // 찾는 요소가 배열에 없으면 '-1'을 반환
console.log(`찾은 인덱스: ${idx}번`);

// includes() : 배열 요소의 존재 여부 확인
var result = foods.includes('김치찌개');
console.log(`탐색 결과: ${result}`);

// slice() : 배열을 잘라냄 (부분추출)
console.log('===============================');

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var slicedArr = arr.slice(3,7); // 3번 이상 7번 미만 자르기
console.log(slicedArr);

console.log(foods);
console.log(foods.slice(1,3));

console.log(arr.slice(6)); // 6번부터 끝까지 잘라냄

console.log(arr); // 복사추출 => 원본은 변화하지 않는다.

// arr = arr.slice(5); <- 원본이 변경된다.

// reverse() : 배열을 역순으로 재배치, 원본을 변화시킴 (내림차순 정령할때 많이 쓰임)
var copyArr = arr.slice(0); // 원본 복사
copyArr.reverse();

console.log(copyArr);

// join() : 배열의 요소들을 연결한 문자열로 변환

var foodStr = foods.join('랑 '); // 구분자 넣고 연결. 비어있으면 콤마로 구분
console.log(foodStr);


// concat() : 배열을 결합 (합집합). 배열을 합쳐서 새로운 배열을 만든다. 복사. 원본은 변하지 않음.
console.log('===============================');
var arr1 = [10,20,30];
var arr2 = [100,300,500];

var concatedArr = arr2.concat(arr1);
console.log(concatedArr);