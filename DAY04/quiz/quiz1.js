// 버스 요금 계산 시뮬레이션
const passenger_way = +window.prompt("몇 번 노선으로?(1~3):") - 1;
const passenger_age = +window.prompt("당신의 나이는?:");
let cost = 0;
const bus = [
    {   name: "시내버스",
        charge: 1200
    },
    {
        name: "광역버스",
        charge: 2000
    },
    {
        name: "마을버스",
        charge: 1000
    }
]
if ((passenger_age <= 7) || (passenger_age >= 65)) {
    cost = 0;
}
else if (passenger_age > 7 && passenger_age < 20) {
    cost = bus[passenger_way].charge * (1-0.3);
}
else { 
    cost = bus[passenger_way].charge
}
window.console.log(`${bus[passenger_way].name} 요금: ${cost}원`);

// if문 안에 들어갈 조건도 const로 변수화 했으면 더 깔끔햇을듯.
// ex) const ifFree = passenger_age <= 7) || (passenger_age >= 65; 같은 방식으로..