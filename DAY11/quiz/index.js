const price_botton = document.querySelector(".price");
const minus = document.querySelector(".minus_box");
const num = document.querySelector(".number_box");
const plus = document.querySelector(".plus_box");
const price = +price_botton.innerHTML.replace(",","").replace("원", "");

console.log(price);
const price_calculator = (x) => {
  price_botton.innerHTML = `${x * price}원`
  const temp = price_botton.innerHTML.split(); 
};

plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
  price_calculator(num.innerHTML);
});

minus.addEventListener("click", () => {
  if (+num.innerHTML > 0) {
    num.innerHTML = +num.innerHTML - 1;
    price_calculator(num.innerHTML);
  }
});

num.addEventListener("click", () => {
  num.innerHTML = 0;
  price_calculator(num.innerHTML);
})