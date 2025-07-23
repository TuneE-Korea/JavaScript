const starbucks = [
  {name: "아메리카노", price: 4500, shots: 2, ingredients: ["water", "caffeine"]},
  {name: "라떼", price: 5500, shots: 2, ingredients: ["water", "milk", "caffeine"]},
  {name: "돌체라떼", price: 6500, shots: 3, ingredients: ["water", "milk", "caffeine", "condensed milk"]},
  {name: "바닐라 크림", price: 4500, shots: 2, ingredients: ["milk", "caffeine", "vanilla", "water"]},
  {name: "카페 모카", price: 4500, shots: 2, ingredients: ["milk", "chocolate", "water", "caffeine"]}
];

// // 1. 라떼 메뉴만 나타내기
// const show_menu_latte = (x) => {
//   return x.name;
// }
// console.log(starbucks.map(show_menu_latte));

// 2. 가격이 6000원 이상 메뉴만 나타내기
// 스킵

// // 3. 저녁 타임 이벤트로 각 가격을 20%할인해서 메뉴 전체 나타내기 (배열 요소 바꾸기 문제)
// const discount_20 = (x) => {
//   x.price = x.price * 0.8;
//   return x;
// }
// console.log(starbucks.map(discount_20));

// // 4. 이름에 "라떼"가 있으면, 재고 없음 이름 바꾸고 아니면 그대로 나타내기
// const change_name_latte = (x) => {
//   if (x.name.includes("라떼")) {
//       x.name = "재고없음";
//       return x;
//   }
//   else {
//     return x;
//   }
// }
// console.log(starbucks.map(change_name_latte));


// 5. caffeine -> decaffeine 으로 바꿔서 나타내기 -> map 함수 두번 쓰기!
const is_caffeine = (x) => {
  return x.includes("caffeine") ? "decaffeine" : x; 
}
const change_decaffeine = (x) => {
  x.ingredients = x.ingredients.map(is_caffeine);
  return x;
}
console.log(starbucks.map(change_decaffeine));