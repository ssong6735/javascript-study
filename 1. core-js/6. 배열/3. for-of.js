var week = ['월', '화', '수', '목', '금', '토', '일'];

/*
for (var day of week) { // for (배열에서 가져올 내용 담을 변수 of 배열) 데이터의 개수만큼 반복하고 자동종료
    console.log(day + '요일');
}
*/


// 인덱스 제어할때
for (var i = 0; i < week.length; i++) {
    if (i%2 === 0) { // 홀수만 선택
    console.log(week[i] + '요일');
    }
}


