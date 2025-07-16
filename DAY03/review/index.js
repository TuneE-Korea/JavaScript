// quiz 1
// 양의 정수 판별
const N = +window.prompt("정수를 입력해주세요: ")
const quiz1_reply1 = "양의 정수입니다."
const quiz1_reply2 = "0 또는 음의 정수입니다."
const quiz1_Discrimination = N > 0 ? quiz1_reply1 : quiz1_reply2
window.console.log(`${N}은 ${quiz1_Discrimination}`)

// quiz 2
// 놀이기구 탑승 가능여부 확인
const user_height = +window.prompt("당신의 키를 입력해주세요: ")
const quiz2_reply1 = "해당 놀이기구는 탈 수 있습니다."
const quiz2_reply2 = "해당 놀이기구는 탈 수 없습니다."
const quiz2_Discrimination = user_height > 140 ? quiz2_reply1 : quiz2_reply2
window.console.log(`키가 ${user_height}cm 이면 ${quiz2_Discrimination}`)

// quiz 3
// 나이 입력 후 성인 여부 판별
const user_age = +window.prompt("당신의 나이를 입력해주세요: ")
const is_over18 = user_age >= 20
const quiz3_Discrimination = is_over18 ? "성인입니다." : "미성년자입니다."
window.console.log(quiz3_Discrimination)

// quiz 4
// 이름 입력 후 인사말 출력
const user_name = window.prompt("당신의 이름을 입력해주세요")
const is_empty = user_name == ""
const quiz4_Discrimination = is_empty ? "이름을 입력해주세요" : `안녕하세요, ${user_name}님!`
window.console.log(quiz4_Discrimination)

// quiz 5
// 홀수/짝수 판별 프로그램
const user_input = +window.prompt("정수를 입력해주세요: ")
const is_evennumber = user_input % 2 == 0
const quiz5_Discrimination = is_evennumber ? "짝수입니다." : "홀수입니다."
window.console.log(quiz5_Discrimination)