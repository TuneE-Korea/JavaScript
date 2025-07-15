// 1. 유저에게 한 변의 길이를 입력 받고, 정사각형의 넓이를 콘솔로 나타내기
// 결과 -> 한 변의 길이가 ${}인 정사각형의 넓이 : ${}
const length1 = window.prompt("한 변의 길이는? :")
const extent1 = Number(length1)**2
window.console.log(`한 변의 길이가 ${length1}인 정사각형의 넓이 : ${extent1}`)

// 2. 유저에게 밑변과 높이를 입력 받고, 삼각형의 넓이를 콘솔로 나타내기
// 결과 -> 밑변 ${}과 높이 ${}인 삼각형의 넓이: {}
const length_bottm = window.prompt("밑 변의 길이는? :")
const length_height = window.prompt("높이는? :")
const extent2 = 0.5 * Number(length_bottm) * Number(length_height)
window.console.log(`밑변 ${length_bottm}과 높이 ${length_height}인 삼각형의 넓이: ${extent2}`)

// 3. 유저에게 일본여행 갈겸, 원화를 입력 받고 엔화로 콘솔로 나타내기
// 결과 -> ${}원은 ${}엔 입니다!
const won = window.prompt("보유 원화는 얼마? :")
const converted_yen = Number(won) * 9.33
window.console.log(`${won}원은 ${converted_yen}엔 입니다!`)

// 4. 유저에게 신장과 몸무게를 입력받고 BMI 지수로 콘솔로 나타내기
// 결과 -> 키: ${} 몸무게: ${} BMI: ${}
const user_height = window.prompt("니 키는? :")
const user_weight = window.prompt("니 몸무게는? :")
const bmi = (Number(user_weight) / Number(user_height)**2) * 10000
const BMI = bmi.toFixed(2)
window.console.log(`키: ${user_height}, 몸무게: ${user_weight}, BMI: ${BMI}`)

// 5. 유저에게 몇분을 입력 받고 몇초인지 콘솔로 나타내기
// 결과 -> 분: ${}, 초: ${}
const minutes = window.prompt("몇 분? :")
const seconds = Number(minutes) * 60
window.console.log(`분: ${minutes}, 초: ${seconds}`)

// 데이터 타입 숫자형으로 형변환하는 대표적인 방식 3가지 
// 1. Number() ex) Number(user_age)
// 2. parseInt() ex) parseInt("3.14") -> 결과는 3
// 3. + ex) const user_age = +window.prompt("니 나이")