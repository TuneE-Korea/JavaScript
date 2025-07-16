// quiz 1
// 유저에게 영어점수를 입력 받고 결과를 콘솔로 출력하기!
// 90점 이상이면 -> A
// 80점 이상이면 -> B
// 70점 이상이면 -> C
// 60점 이상이면 -> D
// 그 외는 -> F

const eng_record = +window.prompt("[quiz 1] 당신의 영어점수를 입력하세요: ")
if (eng_record >= 90) {
    window.console.log("A")
}
else if (eng_record >= 80 ) {
    window.console.log("B")
}
else if (eng_record >= 70 ) {
    window.console.log("C")
}
else if (eng_record >= 60 ) {
    window.console.log("D")
}
else {
    window.console.log("F")
}
window.console.log("[quiz 1] 끄으으읏!")

// quiz 2 
// 정수를 하나 입력받고, '양의 홀수', '양의 짝수', '음의 홀수', '음의 짝수'
// 또는 0을 콘솔로 출력
const n = +window.prompt("[quiz 2] 정수 하나 입력해보쇼: ")
if (n > 0 && n % 2 == 0) {
    window.console.log(`${n}은 양의 짝수`)
}
else if (n > 0 && n % 2 == 1) {
    window.console.log(`${n}은 양의 홀수`)
}
else if (n < 0 && n % 2 == 0) {
    window.console.log(`${n}은 음의 짝수`)
}
else if (n < 0 && n % 2 == -1) {
    window.console.log(`${n}은 음의 홀수`)
}
else {
    window.console.log("0")
}
window.console.log("[quiz 2] 끄으으읏!")