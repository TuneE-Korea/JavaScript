// 1. Document[HTML 타입] querySelector(찾기), createElement(만들기)
// 2. Element[TAG 타입] innerHTML(글씨넣기), style(css), appendChild(자식 태그로 넣기)
// 만들고 - 쓰고 - 위치 지정해주기~

// div - 글씨[pink], 배경색[green], 폰트크기[30px]
const div = document.createElement("div");
div.innerHTML = "안녕 나는 div야";
div.style.color = "pink";
div.style.backgroundColor = "green";
div.style.fontSize = "30px";
document.body.appendChild(div);

// button - 글씨[blue], 배경색[yellow], 폰트크기[20px], padding[10px]
const button = document.createElement("button");
button.innerHTML = "해피!";
button.style.color = "blue";
button.style.backgroundColor = "yellow";
button.style.fontSize = "20px";
button.style.padding = "10px"
document.body.appendChild(button);


// 이게 되네
const something = document.createElement("dkan");
something.innerHTML = "이게 되네";
something.style.display = "block";
document.body.appendChild(something);


