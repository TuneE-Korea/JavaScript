const id = document.querySelector(".id");
const pwd = document.querySelector(".pwd");
const id_demand1 = document.querySelector(".id_demand1");  // id 영문 조건
const id_demand2 = document.querySelector(".id_demand2"); // id숫자 조건
const id_demand3 = document.querySelector(".id_demand3"); // id 글자수 조건
const pwd_demand1 = document.querySelector(".pwd_demand1");  // pwd 숫자 조건
const pwd_demand2 = document.querySelector(".pwd_demand2"); // pwd 특수 조건
const pwd_demand3 = document.querySelector(".pwd_demand3"); // pwd 글자수 조건
const check_duplic = document.querySelector(".check_duplic"); 
const check_duplic_text = document.querySelector(".check_duplic > span");

// 영문 포함여부 확인 함수
const is_contain_alphabat = ((id) => {
  const id_arr = [...id];
  let count = 0;
  id_arr.forEach((x) => {
    const to_asci = x.toLowerCase().charCodeAt(0);
    count = to_asci >= 97 && to_asci <= 122 ? 1 : count;    
  })
  return count;
})

// 숫자 포함여부 확인 함수
const is_contain_number = ((id) => {
  const id_arr = [...id];
  let count = 0;
  id_arr.forEach((x) => {
    const to_asci = x.charCodeAt(0);
    count = to_asci >= 48 && to_asci <= 57 ? 1 : count;    
  })
  return count;
})

// 특수문자(!,@,#) 포함여부 확인 함수
const is_contain_specialtoken = ((id) => {
  const id_arr = [...id];
  let count = 0;
  id_arr.forEach((x) => {
    const to_asci = x.charCodeAt(0);
    count = to_asci == 33 || to_asci == 35 || to_asci == 64 ? 1 : count;    
  })
  return count;
})

// ID 입력란 이벤트 구현
id.addEventListener("input", (e) => {
  const len = e.target.value.length;
  id_demand1.style.color = is_contain_alphabat(e.target.value) ? "#78e08f" : "black";
  id_demand2.style.color = is_contain_number(e.target.value) ? "#78e08f" : "black";
  id_demand3.style.color = len > 5 && len < 21 ? "#78e08f" : "black";
  check_duplic.style.backgroundColor = is_contain_alphabat(e.target.value) && is_contain_number(e.target.value) ? "black" : "#F2F2F2";
  check_duplic_text.style.color = is_contain_alphabat(e.target.value) && is_contain_number(e.target.value) ? "white" : "#999999";
})

// PASSWORD 입력란 이벤트 구현
pwd.addEventListener("input", (e) => {
  const len = e.target.value.length;
  pwd_demand1.style.color = is_contain_number(e.target.value) ? "#78e08f" : "black";
  pwd_demand2.style.color = is_contain_specialtoken(e.target.value) ? "#78e08f" : "black";
  pwd_demand3.style.color = len > 7 && len < 21 ? "#78e08f" : "black";
})
