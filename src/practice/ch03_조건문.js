let date = new Date().getDate();
console.log(date);
console.log(`오늘은의 날짜는 ${date % 2 == 0 ? '짝수' : '홀수'}입니다.`);

let test;
test = test ? test : '초기값';      // null, undefined, '',0,{},[]만 false고 값이 있으면 true
console.log(test);