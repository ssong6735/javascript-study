

for (var i=1; i<11; i++) {
    if (i%2 === 0) {
        continue; // skip과 같다. 밑으로 가지 않고 i++로 바로 이동
    }
    console.log(i);
}

console.log('=================');

while (true) {
    var n = +prompt('정수를 입력하세요.');
    if (n===0) break;
    else if (n===1) continue;


    alert('메롱메롱~');
}