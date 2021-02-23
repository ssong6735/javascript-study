// 객체 : 순차적이지 않은 데이터. 프로퍼티로 참조

// 객체 생성 (프로퍼티 콤마(,)로 구분) 
var dog = {
    name: '뽀삐',
    kind: '시츄',
    age: 3,
    favorite: ['산책', '간식']
};

var cat = {
    name: '콩순이',
    kind: '코숏',
    age: 2,
    favorite: ['낮잠', '참치', '실뭉치']
};

console.log(typeof dog);

// 객체 프로퍼티 참조 (온점(.) 사용)
console.log(dog.name);
console.log(cat.name);

console.log(dog.age);

console.log(cat.favorite[1]);

dog.favorite.push('꼬리흔들기');
console.log(dog);


// 프로퍼티 참조 다른방법
console.log('=============================');
console.log(dog.kind);
console.log(dog['kind']); // 파이썬식 방법 (키값을 꼭 문자열(string)으로 적어야 함)


// 프로퍼티 값 수정
dog.age = 5; // 기존 키값이 있으면 수정, 없으면 추가

cat.favorite[1] = '꽁치';
console.log(cat);


// 프로퍼티 동적 추가
console.log('=============================');

dog.owner = '김철수';
console.log(dog);


// 프로퍼티 삭제
delete dog.owner;
console.log(dog);


// for ~ in (ES6)
console.log('=============================');

for (var key in cat) {
    console.log(cat[key]); // cat.key 는 cat.'프로퍼티 문자열' 로 가져온다. 그래서 대가로 사용
}



// 객체의 프로퍼티 키의 존재 유무 확인 (in 키워드)
console.log('=============================');
var flag = 'owner' in cat; // 논리값으로 반환
console.log(flag);

var key = 'hobby';
if (key in dog) {
    console.log('있다.');
}
console.log('없다.');


