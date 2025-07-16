// quiz 1 
// const angle = +window.prompt("[quiz 1] 각도 좀 입력해봐라: ")
// if (angle > 0 && angle < 90) {
//     window.console.log(`${angle}은 예각 이란다.`)
// }
// else if (angle == 90) {
//     window.console.log(`${angle}은 직각 이란다.`)
// }
// else if (angle > 90 && angle < 180) {
//     window.console.log(`${angle}은 둔각 이란다.`)
// }
// else if (angle == 180) {
//     window.console.log(`${angle}은 평각 이란다.`)
// }
// window.console.log("[quiz 1] 끄으으읏!")

// quiz 2
// const korean = +window.prompt("[quiz 2] 국어점수 함 입력해바라: ")
// const english = +window.prompt("[quiz 2] 영어점수 함 입력해바라: ")
// const math = +window.prompt("[quiz 2] 수학점수 함 입력해바라: ")
// let evaluation_good = 0
// let evaluation_bad = 0
// if (korean >= 90) {
//     window.console.log(`국어가 ${korean}점이면 A`)
//     if (korean == 100) {
//         evaluation_good = evaluation_good + 1
//     }
// }
// else if (korean >= 80 && korean < 90) {
//     window.console.log(`국어가 ${korean}점이면 B`)
// }
// else if (korean < 80) {
//     window.console.log(`국어가 ${korean}점이면 C`)
//     if (korean < 60) {
//         evaluation_bad = evaluation_bad + 1
//     }
// }
// if (english >= 90) {
//     window.console.log(`영어가 ${english}점이면 A`)
//     if (english == 100) {
//         evaluation_good = evaluation_good + 1
//     }
// }
// else if (english >= 80 && english < 90) {
//     window.console.log(`영어가 ${english}점이면 B`)
// }
// else if (english < 80) {
//     window.console.log(`영어가 ${english}점이면 C`)
//     if (english < 60) {
//         evaluation_bad = evaluation_bad + 1
//     }
// }
// if (math >= 90) {
//     window.console.log(`수학이 ${math}점이면 A`)
//     if (math == 100) {
//         evaluation_good = evaluation_good + 1
//     }
// }
// else if (math >= 80 && math < 90) {
//     window.console.log(`수학이 ${math}점이면 B`)
// }
// else if (math < 80) {
//     window.console.log(`수학이 ${math}점이면 C`)
//     if (math < 60) {
//         evaluation_bad = evaluation_bad + 1
//     }
// }
// if (evaluation_good != 0) {
//     window.console.log("GOOD!")
// }
// if (evaluation_bad != 0) {
//     window.console.log("BAD!")
// }
// window.console.log("[quiz 2] 끄으으읏!")
/// 엥... 뭐야 세 점수의 평균가지고 100점이냐 60점미만이냐 판별하는거였어? ;;


// quiz 3
const menu1 = 3000
const menu2 = 4000
const menu3 = 3500
const user_want_menu = window.prompt("[quiz 3] 뭘 원하는데?: ")
const user_want_count = window.prompt("[quiz 3] 몇 개를 원하는데?: ")
const user_money = window.prompt("[quiz 3] 너 얼마 줄건데?: ")
let price = 0
let value = 0
// window.console.log(`아메리카노 가격: ${menu1}`)
// window.console.log(`레몬에이드 가격: ${menu2}`)
// window.console.log(`카페라떼 가격: ${menu3}`)
// window.console.log(`건네받은 돈: ${user_money}`)
if (user_want_menu == 1) {
    price = menu1 * user_want_count
    value = user_money - price
    if(value >= 0) {
        window.console.log(`아메리카노 ${user_want_count}개, 가격: ${price}원, 잔돈: ${value}원`)
    }
    else {
        window.console.log("잔액이 부족합니다.")
    }  
}
else if (user_want_menu == 2) {
    price = menu2 * user_want_count
    value = user_money - price
    if(value >= 0) {
        window.console.log(`레몬에이드 ${user_want_count}개, 가격: ${price}원, 잔돈: ${value}원`)
    }
    else {
        window.console.log("잔액이 부족합니다.")
    }  
}
else if (user_want_menu == 3) {
    price = menu3 * user_want_count
    value = user_money - price
    if(value >= 0) {
        window.console.log(`카페라떼 ${user_want_count}개, 가격: ${price}원 ,잔돈: ${value}원`)
    }
    else {
        window.console.log("잔액이 부족합니다.")
    }  
}
else {
    window.console.log("아오 1~3까지만 입력하라고오!")
}
window.console.log("[quiz 3] 끄으으읏!")
