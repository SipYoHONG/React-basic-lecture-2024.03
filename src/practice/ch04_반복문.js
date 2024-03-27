let fruits = ['바나나', '배', '사과'];

for (let i = 0; i < fruits.length; i++) 
    console.log(fruits[i]);

for (let fruit of fruits)
    console.log(fruit);

var x = 4;      // 재선언 가능. 스코프 오류발생의 주범(코드가 길어지면 선언을 어떻게 한지 파악 힘듬)
var x = 6;      // 가급적 권장은 안함 <- 내가 애는 지정해줘야겠다 하면 사용하고 그 이외는 사용하지마!
let y = 4;      // 재선언이 안됨
// let y = 6;
