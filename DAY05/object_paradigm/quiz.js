// 베스킨라빈스 오브젝트를 만들고,
// 아이스크림 3개 종류를 넣고,
// 매출은 0부터 시작하고
// 판매가 되면 그 아이스크림 가격에 따른 매출이 오르도록 하는 오브젝트 타입 
// 만들기
// const order = window.prompt("메뉴:");

const baskin = {
  menu: ["엄마는 외계인", "레인보우 샤베트", "슈팅스타"], // 1~3번 존재
  price: [4000, 3500, 3000],
  sales: 0, // 매출
  calculator: function(menu_number) {
    this.sales = this.sales + this.price[menu_number-1] 
  }
};

baskin.calculator(2);
baskin.calculator(2);
baskin.calculator(3);
window.console.log(baskin.sales);

// 아이스크림을 종류별로 object로 만드는 것이 더 나았을 것 같다. 
// ex) baskin 객체 안에 icecream 리스트를 하나 만들고 그 안에 다시 객체를 만드는 형태