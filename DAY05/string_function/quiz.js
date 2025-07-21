// 문제1 <비밀번호 규칙에 맞게 생성하기>
// 유저에게 프롬프트로 비밀번호 설정을 입력받고,
// 1. 비밀번호 길이가 4에서 12글자까지만 허용, 아니면 -> 비밀번호 길이가 맞지 않습니다.
// 2. 비밀번호에 @, !, # 중 하나가 포함되어야 허용, 아니면 -> 비밀번호에 @, !, #중 하나라도 포함되어야 합니다.
// 3. 비밀번호 시작이 it로 해야 허용, 아니면 -> 비밀번호 시작을 it로 해주셔야 합니다.
// 다 통과되면 올바르게 비밀번호를 생성했습니다!

const pwd = window.prompt("사용하실 비밀번호를 입력해주세요: ");
const is_exist_special = pwd.includes("@") || pwd.includes("!") || pwd.includes("#");
const is_start_with_it = pwd.startsWith("it") || pwd.startsWith("IT") || pwd.startsWith("It") || pwd.startsWith("iT")

if (pwd.length >= 4 && pwd.length <= 12) { // 1번 조건 (길이 충족)
  if (is_exist_special) { // 2번 조건 (특수문자 존재여부)
    if (is_start_with_it) { // 3번 조건 (시작 문자 "it" 확인)
      window.console.log(`입력하신 비밀번호: ${pwd} \n✨올바르게 비밀번호를 생성했습니다! 짝짝짝✨`);
    }
    else { 
      window.console.log(`입력하신 비밀번호: ${pwd} \n비밀번호 시작을 it로 해주셔야 합니다.`);
    }
  }
  else {
    window.console.log(`입력하신 비밀번호: ${pwd} \n비밀번호에 @, !, #중 하나라도 포함되어야 합니다.`);  
  }
}
else {
  window.console.log(`입력하신 비밀번호: ${pwd} \n비밀번호 길이가 맞지 않습니다.`);
}