// 피자 자판기 시뮬레이션
const pizza_order = {
    menu1: {
        name: "pepperoni",
        price: 15000
    },
    menu2: {
        name: "cheese",
        price: 13000
    },
    menu3: {
        name: "bulgogi",
        price: 16000
    }
};
const user_want = +window.prompt("메뉴를 골라주세여(1~3):");
const user_count = +window.prompt("몇 개 드실래영?:");
const user_input = +window.prompt("얼마 주실건데용?:");
let remain = 0;

if (user_want == 1) {
    remain = user_input - pizza_order.menu1.price * user_count 
    if (remain > 0) {
        window.console.log(`${pizza_order.menu1.name}피자 ${user_count}개, 잔돈 ${remain}원`)
    }
    else {
        window.console.log("잔액이 부족합니다.")
    } 
}
else if (user_want == 2) {
    remain = user_input - pizza_order.menu2.price * user_count
    if (remain > 0) {
        window.console.log(`${pizza_order.menu2.name}피자 ${user_count}개, 잔돈 ${remain}원`)
    }
    else {
        window.console.log("잔액이 부족합니다.")
    } 
}
else {
    remain = user_input - pizza_order.menu3.price * user_count
    if (remain > 0) {
        window.console.log(`${pizza_order.menu3.name}피자 ${user_count}개, 잔돈 ${remain}원`)
    } 
    else {
        window.console.log("잔액이 부족합니다.")
    } 
}

// 리스트를 써서 좀더 간결하게 작성할 수 있었다..
// ex) const menu =[{name: 페퍼로니, price: 15000}, {name: 치즈피자, price: 13000}]와 같은 방식