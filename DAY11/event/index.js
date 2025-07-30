const button = document.querySelector("button");

// button.addEventListner("이벤트 종류", 무엇을)
// button.addEventListener("click", () => {
//   alert("버튼이다.");
// });

// quiz 1 
// 추가 버튼을 클릭하면 새롭게 div태그로 아메리카노 라고 적힌 요소가 생성됨!

const make_div = (`<div class="americano">아메리카노</div>`);
const body = document.querySelector("body");

button.addEventListener("click", () =>
  body.insertAdjacentHTML("beforeend", make_div)
);