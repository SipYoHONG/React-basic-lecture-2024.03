let s = `He said, "I'm Unhappy."`;      // template literal
console.log(s);


let year = new Date().getFullYear();
console.log(`올해는 ${year}년 입니다.`);

let toggle = true;
for (let i = 0; i < 4; i++) {
    toggle = !toggle;
    console.log(toggle);
}

console.log(`2 == '2' is ${2 == '2'}`);
console.log(`2 == '2' is ${2 === '2'}`);
