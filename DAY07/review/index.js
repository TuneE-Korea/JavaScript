// 1. 숫자 배열 제곱 값 구하기
// 전: [1, 2 ,3, 4]
// 후: [1, 4, 9, 16]
// const square = (x) => {
//   return x ** 2;
// }
// console.log([1, 2, 3, 4].map(square));

// 2. 이름 배열 대문자로 변환하기
// 전: ['hong', 'kim', 'lee']
// 후: ['HONG', 'KIM', 'LEE']
// const upper = (x) => {
//   return x.toUpperCase();
// }
// console.log(['hong', 'kim', 'lee'].map(upper));

// 3. 점수 배열에 60점 미만 기준으로 합격/불합격 여부 표시하기
// const is_60over = (x) => {
//   return x > 60 ? "합격" : "불합격";
// }
// console.log([85, 42, 77].map(is_60over));


// 4. 상품 할인 가격 20% 배열 만들기
// [10000, 20000, 15000]
// const discount20 = (x) => {
//   return x * 0.8;
// }
// console.log([10000, 20000, 15000].map(discount20));

// 5. 학생 객체 배열에서 이름만 추출하기
// [{name: '홍길동', age: 16}, {name: '김철수', age: 17}]
// const students = [{name: '홍길동', age: 16}, {name: '김철수', age: 17}];
// const extraction = (x) => {
//   return x.name;
// }
// console.log(students.map(extraction));
