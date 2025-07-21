// 1. 어떠한 x를 넣으면 제곱을 반환하는 함수 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
const x = +window.prompt("숫자 아무거나 입력해보세요1: ")
function square(x) {
  return x **2;
}
window.console.log(`1번 문제의 결과는? (입력값: ${x}): ${square(x)}`);

// 2. 어떠한 food를 넣으면 'food는 맛있다' 함수 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
const food = window.prompt("음식을 입력해주세요: ");
function is_delicious(food) {
  return food + "(은)는 맛있다";
}
window.console.log(`2번 문제의 결과는? (입력값: ${food}): ${is_delicious(food)}`);

// 3. 어떠한 x를 넣으면 홀수 또는 짝수를 돌려주는 함수를 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
const N1 = +window.prompt("숫자 아무거나 입력해보세요2:");
function even_or_odd(N) {
  if (N1 != Number) {
    return "숫자 입력하시라구요;"
  }
  else if (N1 % 2 == 0) {
    return "짝수";
  }
  else {
    return "홀수";
  }
}
window.console.log(`3번 문제의 결과는? (입력값: ${N1}): ${even_or_odd(N1)}`);

// 4. 어떠한 x를 넣으면 배열로 [x*1, x*2, x*3]을 돌려주는 함수를 만든 후
// 함수를 활용해서 콘솔로 결과 나타내기
const N2 = +window.prompt("숫자 아무거나 입력해보세요2:");
function create_array(N2) {
  const ary = [N2*1, N2*2, N2*3]
  return ary
}
window.console.log(`4번 문제의 결과는? (입력값: ${N2}): ${create_array(N2)}`);

 // 항상 결과가 이분법적으로 나오는 조건은 삼항연산자 사용을 고려해보자.