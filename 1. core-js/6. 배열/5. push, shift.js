

var foods = ['볶음밥', '닭강정', '피자'];
console.log(foods);

var lastElement = foods.pop(); //후입선출 마지막 요소 제거
console.log(foods);
console.log(lastElement);

foods.push('파스타'); //후입선출 마지막 요소 추가
foods.push('족발');
console.log(foods);

foods.shift(); //선입선출 첫번째 요소 제거
console.log(foods);

foods.unshift('떡볶이'); //선입선출 첫번째 요소 추가
console.log(foods);

