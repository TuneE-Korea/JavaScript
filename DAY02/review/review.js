const today = window.prompt("오늘 요일은?")
const current_time = window.prompt("현재 시간은?")
window.alert(`오늘은 ${today}요일이고 현재 시각 ${current_time}입니다!`)

const user_name = window.prompt("니 이름?")
const f_food = window.prompt("첫 번째로 좋아하는 음식?")
const s_food = window.prompt("두 번째로 좋아하는 음식?")
const t_food = window.prompt("세 번째로 좋아하는 음식?")
window.console.log(`${user_name}님은 최애 음식 순서\n1.${f_food}\n2.${s_food}\n3.${t_food}`)