

var integer = 100; //정수
var float = 3.14; //실수

// typeof 연산자 : 데이터의 타입을 문자열로 알려줌
console.log(typeof integer);
console.log(typeof float);

var bin = 0b01000010; // 2진수인걸 알려주려면 앞에 0b를 붙인다.
console.log(bin);

var oct = 0o102; // 8진수인걸 알려주려면 앞에 0o를 붙인다.
console.log(oct);

var hex = 0xAC00; // 16진수인걸 알려주려면 앞에 0x를 붙인다.
console.log(hex);

console.log(10/4); // js에서는 자동으로 실수로 계산한다.

console.log(30/"메롱"); // NaN(not-a-number) : 산술 연산 불가값.
var notANum = NaN; // 의도적으로 숫자가 아닌 값으로 표현할때 사용.

