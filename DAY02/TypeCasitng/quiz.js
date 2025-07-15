// quiz 1
const first_N = window.prompt("첫 번째 숫자?:") // window.prompt로 입력받는 값은 문자열이다
const second_N = window.prompt("두 번째 숫자?:")
const result = Number(first_N) + Number(second_N)
window.alert(`첫번째 숫자: ${first_N} + 두번째 숫자: ${second_N} = 결과: ${result}`)

// quiz 2
const user_age = window.prompt("니 나이는? :")
const birth_year = 2025 - Number(user_age) + 1
window.alert(`귀하의 태어난 년도는 ${birth_year}년도 입니다!`)