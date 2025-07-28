const cafeMenu = [
  { name: "아메리카노", price: 4000, isIce: false, calories: 10, ingredients: ["에스프레소", "물"]},
  { name: "아이스라떼", price: 4800, isIce: true, calories: 120, ingredients: ["에스프레소", "우유", "얼음"]},
  { name: "자몽에이드", price: 5200, isIce: true, calories: 110, ingredients: ["자몽", "탄산수", "얼음", "시럽"]},
  { name: "핫초코", price: 4500, isIce: false, calories: 230, ingredients: ["코코아", "우유", "설탕"]},
  { name: "딸기라떼", price: 5300, isIce: true, calories: 210, ingredients: ["딸기", "얼음", "우유", "설탕"]}
]
// 1. 우유가 들어간 메뉴의 이름만 배열로 추출하기
// console.log(cafeMenu.filter((x) => x.ingredients.includes("우유")));

// 2. 에스프레소가 들어가지 않는 차가운(ice) 메뉴의 이름 배열 만들기
// console.log(cafeMenu.filter((x) => x.isIce && x.ingredients.every((y) => y != "에스프레소")));

// 3. 칼로리가 100 미만이면서 우유가 들어가지 않는 메뉴의 이름만 배열로 만들기
// console.log(cafeMenu.filter((x) => x.calories < 100 && x.ingredients.every((y) => y != "우유")));

// 4. "설탕" 성분이 들어간 메뉴만 이름과 가격 객체 배열로 만들기
// 1번 출력 방법 (delete로 필요없는 key 삭제하기)
// const cvt = cafeMenu.filter((x) => x.ingredients.some((y) => y == "설탕"));
// answer4 = cvt.map((x) => {
//   delete x.isIce, x.calories, x.ingredients;
//   return x;
// });
// console.log(answer4);

// 2번 출력 방법 (그냥 새로운 배열 선언해서 출력하기)
// const cvt = cafeMenu.filter((x) => x.ingredients.some((y) => y == "설탕"));
// answer4 = cvt.map((x) => {
//   return {
//     name: x.name,
//     price: x.price
//   }
// });
// console.log(answer4);