const minus_button = document.querySelector(".minus");
const number_button = document.querySelector(".num");
const plus_button = document.querySelector(".plus");

// quiz 2
// minus_button.addEventListener("click", () => number_button.innerHTML = +number_button.innerHTML - 1);
// plus_button.addEventListener("click", () => number_button.innerHTML = +number_button.innerHTML + 1);
// number_button.addEventListener("click", () => number_button.innerHTML = 0);

// quiz 3 (추가퀴즈)
// 0 미만으로 마이너스 안되도록 막아주고, 10 이상면 num의 글씨 색상이 파란색으로 바뀌기
// 0~9 : black
number_button.addEventListener("click", () => number_button.innerHTML = 0);
const is_over10 = (x) => { +x.innerHTML >=10 ? x.style.color = "blue" : x.style.color = "black" };

minus_button.addEventListener("click", () => {
  if (+number_button.innerHTML > 0) {
  number_button.innerHTML = +number_button.innerHTML - 1;
  is_over10(number_button);
  }
});

plus_button.addEventListener("click", () => {
  number_button.innerHTML = +number_button.innerHTML + 1
  is_over10(number_button);
});