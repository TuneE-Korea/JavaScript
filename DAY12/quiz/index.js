// 이벤트 타입을 뭐 어떻게 활용하지..?
// 굳이 활용하려면 버튼 태그 안에 음료 정보들을 집어넣어야 할거같은데
// 일단 위 생각대로 구현
// 알고보니 약간의 문제 오류였음 ㅋㅋ.. 굳이 이벤트 타입을 쓰려면 내가 한 방식대로 하는게 맞음

const ame_button = document.querySelector(".ame_buy");
const lat_button = document.querySelector(".lat_buy");
const banil_button = document.querySelector(".banil_buy");
const price = document.querySelector(".price");
const reset = document.querySelector(".reset");

ame_button.addEventListener("click", (e) => {
  const temp = +price.innerHTML.replace("원", "");
  price.innerHTML = (+(e.target.innerHTML.split(" ")[1].replace("원", "")) + temp) + "원";
})

lat_button.addEventListener("click", (e) => {
  const temp = +price.innerHTML.replace("원", "");
  price.innerHTML = (+(e.target.innerHTML.split(" ")[1].replace("원", "")) + temp) + "원";
})

banil_button.addEventListener("click", (e) => {
  const temp = +price.innerHTML.replace("원", "");
  price.innerHTML = (+(e.target.innerHTML.split(" ")[1].replace("원", "")) + temp) + "원";
})

reset.addEventListener("click", () => {
  price.innerHTML = "0원";
})
