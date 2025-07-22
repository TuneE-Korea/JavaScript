// 유저에게 프롬프트로 영어 문장을 입력받고
// 띄어쓰기(공백) 별로 영어의 문장의 길이를 배열로 나타내기
// ex) "today is tuesday" -> [5, 2, 7]
const input = window.prompt("영어 문장을 입력해주세요:");
const seperate = input.split(" ");
const fn1 = (x) => {
  return x.length;
}
const answer = seperate.map(fn1);
console.log(`문장: ${input}, 정답: ${answer}`);