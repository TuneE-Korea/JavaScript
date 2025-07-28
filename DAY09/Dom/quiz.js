// quiz 1
// 프롬프트로 유저에게 만들고 싶은 태그 묻고
// 태그의 배경색 묻고
// 태그의 컨텐츠(안의 내용) 묻고 난 후에
// HTML에 유저가 요구한 태그 만들기!

// const want_tag = prompt("무슨 태그를 만들고 싶으신 가요?: ");
// const want_bgr_c = prompt("배경색은 무슨 색으로 할까요?(영어로 입력): ");
// const want_content = prompt("내용은 뭘로 채울까요: ");

// const user_want_tag = document.createElement(want_tag);
// user_want_tag.innerHTML = want_content;
// user_want_tag.style.backgroundColor = want_bgr_c;
// user_want_tag.style.Width = "100%";
// user_want_tag.style.maxWidth = "480px";
// user_want_tag.style.margin = "0 auto";
// user_want_tag.style.textAlign = "center";
// document.body.appendChild(user_want_tag);


// quiz 2
// 유저에게 좋아하는 음식들 입력받고
// 음식들을 각각 버튼 태그로 만들고
// 버튼 태그 색상은 순서대로 빨주노초파남보...
// ex) apple kiwi banana mango grape watermelon melon orange
const user_food = prompt("좋아하는 음식들을 입력해주세요(공백으로 분리해서):");
const food_arr = user_food.split(" ");
const color_arr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

food_arr.forEach((x, i) => { 
  const temp = document.createElement("button")
  temp.innerHTML = x;
  temp.style.backgroundColor = color_arr[i % 7];
  return document.body.appendChild(temp);
});

// 배열 요소를  변경하는게 아닌 훑기만 한다면 .map()이 아닌 .forEach()를 쓰는 것이 낫다