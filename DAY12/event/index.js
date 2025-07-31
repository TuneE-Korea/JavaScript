// const btn = document.querySelector(".hi");

// x.target의 값(key)는 이벤트를 일으키는 주체로, button.hi이다.
// 여기서 button.hi는 element 타입!
// btn.addEventListener("mouseenter", (x) => {
//   console.log(x.target.innerHTML = "안녕하세요");
// });

// quiz 1
// input 입력값의 길이 구하기
// const input = document.querySelector("input");
// const count = document.querySelector(".count");
// input.addEventListener("input", (e)=> {
//   const len = e.target.value.length;
//   count.innerHTML = len;
// });

// quiz 2
// 😎인 상태일때 누르면 이모지😛로 되고, pwd로 바뀜 
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", (e)=> {
  if (e.target.innerHTML == "😎") {
    e.target.innerHTML = "😛"; 
    input.type = "password";
  }
  else {
    e.target.innerHTML = "😎";
    input.type = "text";
  }
});

// quiz 3
// 글자 개수 늘면 숫자/10 형태로 나오고 10 넘으면 빨간색으로 나타나도록 만들기
const count = document.querySelector(".count");
input.addEventListener("input", (e)=> {
  const len = e.target.value.length;
  count.innerHTML = len + "/10";
  count.style.color = len >= 10 ? "red" : "black";
});

