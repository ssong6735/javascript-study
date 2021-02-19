/*
for (var floor = 2; floor <= 9; floor++) {

    for (var line = 1; line <= 9; line++) {
        console.log(`${floor} x ${line} = ${floor*line}`);
    }
    console.log('==================================');

}
*/
var num = 1;
for (var i=0; i<5; i++) { // ~미만일때 그 수만큼 반복
    for (var j=0; j<3; j++) {
        for (var k=0; k<2; k++) {
        console.log('안녕' + num);
        num++;
        }        
    }
}