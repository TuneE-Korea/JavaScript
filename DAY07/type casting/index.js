// 1. 문자에서 배열로 바꾸기
// -1. split() 사용하기 ex.) "apple watch".split("");
// -2. 스프레드(...)연산자 사용하기 ex.) [...apple]

// 2. 배열에서 문자로 바꾸기
// -1. join()


// quiz
// 유저에게 영단어를 입력받고
// a, e, i는 대문자로 바꾸고 아니면 그대로 해서 콘솔로 나타내기
const eng_word = window.prompt("영단어를 입력하시오: ");
const convrt_word = eng_word.split("");
const answer = convrt_word.map((x) => x == "a" || x == "e" || x == "i" ? x.toUpperCase() : x).join("");
console.log(answer);

// quiz + 
// a,e,i,o,u는 대문자로 바꾸고 ~ ``
