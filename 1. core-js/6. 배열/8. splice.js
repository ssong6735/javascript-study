// splice() : 배열의 특정 요소 제거 ( 인덱스 ~번 부터 몇개)
var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];
console.log(foods);

var delFoods = foods.splice(1, 2);
console.log(foods);
console.log(delFoods);

foods.splice(0, 1, '치킨', '파스타'); // 요소를 제거한 위치에 추가로 다른 요소 삽입 가능
console.log(foods);

// 2번 인덱스 위치에 피자를 삽입 (중간 삽입 가능)
foods.splice(2, 0, '피자');
console.log(foods);

// 2번 인덱스부터 끝까지 삭제
foods.splice(2);
console.log(foods);

foods.push('보쌈', '닭발');
console.log(foods);


// 사용자의 삭제 요구 데이터
/*
console.log('====================');
var input = '짜장면';

if (foods.includes(input)) {
    foods.splice(foods.indexOf(input), 1);
    console.log(`${input} 삭제 완료!`);
} else {
    console.log(`데이터가 없습니다.`);
}
console.log(foods);
*/

console.log('====================');
var input = '짜장면';
var idx;
if (idx >= 0) {
    foods.splice(idx, 1);
    console.log(`${input} 삭제 완료!`);
} else {
    console.log(`데이터가 없습니다.`);
}
console.log(foods);