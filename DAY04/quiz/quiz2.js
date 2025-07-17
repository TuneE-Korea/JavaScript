// 지하철 요금 계산 시뮬레이션 (최종 지하철 요금 출력)
// if문 조건 변수화하기
const way = +window.prompt("지하철 노선 종류(1~3): ")-1;
const age = +window.prompt("승객의 나이: ");
const panel = +window.prompt("지하철 탑승 구간(정수): ");
let fee = 0;
const subway= [
    {name: "일반 노선", price: 1250},
    {name: "급행 노선", price: 2000},
    {name: "관광 노선", price: 3000}
];
const isInfancyOrElder = age <= 7 || age >= 65;
const isGeneral = age > 18 && age < 65;
const isYoung = age > 7 && age <= 18;
const isOver11Panel = panel >= 11;
if (isInfancyOrElder) { //유아랑 노인은 무료
    fee = 0;
    window.console.log(`노선종류: ${subway[way].name}, 승객의 나이: ${age}, 요금: ${fee}원`);
}
else if (isYoung) { // 청소년들은 할인
    if (isOver11Panel) { // 10구간이 넘을 경우 추가금액
        fee = (subway[way].price + (panel - 10) * 100) * 0.6;
        window.console.log(`노선종류: ${subway[way].name}, 승객의 나이: ${age}, 요금: ${fee}원`); 
    }
    else {
        fee = subway[way].price * 0.6;
        window.console.log(`노선종류: ${subway[way].name}, 승객의 나이: ${age}, 요금: ${fee}원`);
    }
}
else { // 그외 일반인들은 정상 금액
    if (isOver11Panel) { // 10구간이 넘을 경우 추가금액
        fee = (subway[way].price + (panel - 10) * 100);
        window.console.log(`노선종류: ${subway[way].name}, 승객의 나이: ${age}, 요금: ${fee}원`); 
    }
    else {
        fee = subway[way].price;
        window.console.log(`노선종류: ${subway[way].name}, 승객의 나이: ${age}, 요금: ${fee}원`);
    }
}

// 추가요금 조건 코드를 삼항연산자로 작성해볼 수 있었다. 왜냐? 2가지 경우만 존재했기 때문에...