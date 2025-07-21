// function = 마술상자 (input -> output)
function give100(x) {
  return x * 100;
}

function hello(name) {
  return name + "님 ㅎㅇ";
}

const test = give100(10); 
window.console.log(test); // 1000

const test1 = hello("김태윤");
window.console.log(test1); // 김태윤님 ㅎㅇ

function add(x, y, z) {
  return x + y + z;
}

// excalldraw ? <- 그림판 같은 사이트인가