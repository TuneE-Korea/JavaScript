// quiz
// arr 배열을 줬을 때, 배열 안에 있는 요소들을 2배로 해서 반환해주는 함수 만들기
// ex) [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

// map 함수: iterable한 객체의 요소들에 특정 기준에 따라 적용시켜주는 함수
// 기준은? 스스로 만들어야지...
const mulitply_3 = (x) => {
  return x * 3;
}
const test = [1, 2, 3, 4, 5].map(mulitply_3);
// window.console.log(test);
console.log(test);