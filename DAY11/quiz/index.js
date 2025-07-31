// const data = [
//   socks = {
//     small: "S(225~250mm)",
//     midium: "M(250~275mm)",
//     large: "L(280~300mm)"
//   },
//   color = {
//     black10: "블랙 10팩",
//     white10: "화이트 10팩",
//     snowwhite10: "스노우화이트 10팩",
//     w5b5: "화이트 5팩 + 블랙 5팩",
//     sw5b5: "스노우화이트 5팩 + 블랙5팩",
//     sw5w5: "스노우화이트 5팩 + 화이트5팩"
//   }
//   // price = {

//   // },
// ];

const price = 15900;

// 노드 리스트
const price_box = document.querySelectorAll(".price");
const minus_button = document.querySelectorAll(".minus_box");
const number_button = document.querySelectorAll(".number_box");
const plus_button = document.querySelectorAll(".plus_box");
const count = document.querySelector(".count");
const result_price = document.querySelector(".result_price");

// 가격 계산 함수
// (참고) toLocaleString() -> 3자리마다 쉼표 추가
const price_calculator = (x, i) => {
  const temp = `${(x * price).toLocaleString()}원`;
  price_box[i].innerHTML = temp; 
};

const result_counter = () => {
  let total = 0;
  number_button.forEach((x) => {
    total += +x.innerHTML;
  });
  count.innerHTML = `총 ${total}개`;
}
const result_calculator = () => {
  let total = 0;
  number_button.forEach((x) => {
    total += +x.innerHTML * price;
  });
  result_price.innerHTML = `${total.toLocaleString()}원`;
}

// 플러스 버튼 이벤트
plus_button.forEach((x, i) => {
  x.addEventListener("click", () => {
    number_button[i].innerHTML = +number_button[i].innerHTML + 1;
    price_calculator(number_button[i].innerHTML, i);
    result_counter();
    result_calculator();
  });
});

// 마이너스 버튼 이벤트
minus_button.forEach((x, i) => {
  x.addEventListener("click", () => {
    if (+number_button[i].innerHTML > 0) {
      number_button[i].innerHTML = +number_button[i].innerHTML - 1;      
      price_calculator(number_button[i].innerHTML, i)
      result_counter();
      result_calculator();
    }
  });
});

// 넘버 버튼 이벤트 
number_button.forEach((x, i) => {
  x.addEventListener("click", () => {
  number_button[i].innerHTML = 0;
  price_calculator(number_button[i].innerHTML, i);
  result_counter();
  result_calculator();
  })
})

