// reduce(acc, cur) 연습

// 1. 배열의 모든 값을 합치기
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((a, c) => a + c, 0);
console.log(sum); 
// 결과: 15

// 2. 배열에서 최댓값 찾기
const numbers2 = [10, 5, 8, 20, 2];
const max = numbers2.reduce((a, c) => a > c ? a : c);
console.log(max);
// 결과: 20

// 3. 객체 배열에서 price값의 합 계산
const products = [
  {name: "책", price: 15000},
  {name: "펜", price: 2000},
  {name: "노트", price: 3000}
];
const sum_price = products.reduce((a, c) => a + c.price, 0);
console.log(sum_price);
// 결과: 20000 (초깃값을 선언해주는 것과 안해주는것의 차이를 잘 생각해보자)

// 4. 문자열 배열을 한 문장으로 합치기
const words = ["I", "love", "JavaScript"];
const sentence = words.reduce((a, c) => a + " " + c);
console.log(sentence);
// 결과: I love JavaScript