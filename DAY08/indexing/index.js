// const test = [3, 6, 9, 12, 15];
// const fn = (x) => x * 2;
// test.map((x, i) => i); // [0, 1, 2, 3, 4]

const num = "123456789";
// -> "123456***"
const new_num =[...num];
const prev =new_num.map((x, i) => i >= 6 ? "*" : x);
answer = prev.join("");
console.log(answer);