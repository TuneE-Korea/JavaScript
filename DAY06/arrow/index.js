// 일반 함수 [구 문법]
// function plus100(x) {
//   return x + 100;
// }

// 화살표 함수 [신 문법] - 이 방식을 지향해야함!
// const plus100 = (x) => {
//   return x + 100;
// }
// plus100(0);

// // 1. x를 주면 2배 리턴하는 함수
// const square = (x) => {
//   return x * 2;
// }
// window.console.log(square(4)); 

// // 2. x를 주면 -500 리턴하는 함수
// const minus500 = (x) => {
//   return x - 500;
// }
// window.console.log(minus500(1500));

// // 3. x,y를 주면 더 큰 숫자를 리턴하는 함수
// const compare_big = (x, y) => {
//   return x > y ? x : y;
// }
// window.console.log(compare_big(10, 5));

// // 4. str을 주면 길이를 리턴하는 함수
// const str = window.prompt("문자열 입력해보세요:");
// const check_length = (x) => {
//   return x.length;
// }
// window.console.log(check_length(str));

// // 5. str을 주면 문자의 길이가 10글자보다 큰 경우 "길이가 길어요!" 아니면 "길이가 적당해요" 리턴하는 함수
// const str1 = window.prompt("문자열 입력해보세요:");
// const is_over10 = (x) => {
//   const answer = x.lengh > 10 ? window.console.log("길이가 길어요!") : window.console.log("길이가 적당해요");
//   return answer; 
// }
// window.console.log(is_over10(str1));

// // 6. str을 주면 str을 하다니 완전 럭키비키잖아~ 리턴하는 함수
// const str2 = window.prompt("아무거나 할일을 적어보세요:");
// const lucky_bicky = (x) => {
//   return x + "을(를) 하다니 완전 럭키비키잖아~❤";
// }
// window.console.log(lucky_bicky(str2));

// // 7. x, y를 주면 x의 y제곱을 리턴하는 함수
// const num1 = window.prompt("첫번째 숫자 입력:");
// const num2 = window.prompt("두번째 숫자 입력:");
// const square_xy = (x, y) => {
//   return x ** y;
// }
// window.console.log(square_xy(num1, num2));

// 8. x, y를 주면 두 수의 차를 리턴하는 함수 
// const N1 = window.prompt("N1 입력:");
// const N2 = window.prompt("N2 입력:");
// const minus = (x, y) => {
//   return x - y > 0 ? (x - y) : (y - x);
// }
// window.console.log(minus(N1, N2));

// 9. str을 주면 a or b가 포함되면 포함! 아니면 미포함! 리턴하는 함수
// const str9 = window.prompt("문자열을 입력해보세요:");
// const string_check_ab = (x) => {
//   return x.includes("a") || x.includes("b") ? "포함!" : "미포함!";
// }
// window.console.log(string_check_ab(str9));

// 10. x를 주면 x의 배수(*9까지)를 리스트로 리턴하는 함수
// const N10 = window.prompt("N10 입력:");
// const multiply10_array = (x) => {
//   const ary = [x*1, x*2, x*3, x*4, x*5, x*6, x*7, x*8, x*9];
//   return ary;
// }
// window.console.log(multiply10_array(N10));

// 11. str, x를 주면 str의 0번째 부터 x번째 까지의 문자열을 리턴하는 함수
// ex) apple, 3 -> app
const str11 = window.prompt("11번. 문자열을 입력해보쇼:");
const end = +window.prompt("자연수를 입력해주쇼: ");
const until_endpoint = (x, y) => {
  return x.slice(0, y+1);
}
window.console.log(until_endpoint(str11, end));
