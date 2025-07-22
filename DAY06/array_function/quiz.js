// 1. [3, 6, 9, 12, 15] 배열을 각각 요소를 2배하고 더하기 10해서 콘솔로 나타내기
const calcul1 = (x) => {
  return x * 2 + 10;
};
const answer1 = [3, 6, 9, 12, 15].map(calcul1);
console.log(answer1);

// 2. [1~10] 배열을 각각 요소에서 홀수면 2배, 짝수면 3배해서 콘솔로 나타내기
const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
const even_or_odd = (x) => {
  return x % 2 == 0 ? x * 3 : x * 2;
}
console.log(ary.map(even_or_odd));

// 3. [1~10] 배열을 각각 요소에서 5보다 작으면 1로, 5보다 크면 2로 해서 콘솔로 나타내기 (음... 5면?)
const calcul3 = (x) => {
  return x < 5 ? 1 : 2;
}
const answer3= [1, 2, 3, 4, 5, 6, 7, 8, 9,10].map(calcul3);
console.log(answer3);

// 4. [1~10] 배열을 각각 요소에서 3의 배수면 "❤", 아니면 "😜"로 해서 콘솔로 나타내기
const calcul4 = (x) => {
  return x % 3 == 0 ? "❤" : "😜";
}
const answer4 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10].map(calcul4);
console.log(answer4);

// 5. ["apple", "mango", "juice", "kiwi", "strawberry"] 배열에서 요소를 문자의 길이로 바꿔서 콘솔로 나타내기
const ary5 = ["apple", "mango", "juice", "kiwi", "strawberry"];
const check_length = (x) => {
  return x.length;
}
const answer5 = ary5.map(check_length);
console.log(answer5);