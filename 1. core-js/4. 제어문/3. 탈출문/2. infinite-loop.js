

// 0 ~ 5까지의 랜덤 정수
while (true) {
    var rn = Math.floor(Math.random() * 6);
    console.log(`랜덤값: ${rn}`);

    if (rn===3) {
        console.log('반복문 종료!');
        break;
    }
}
console.log('안녕');

