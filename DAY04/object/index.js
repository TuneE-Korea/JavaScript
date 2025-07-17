// Object 타입 - "객체"라고 부르기도 함
// key-value 
// key 중복 안됨 - 문자,숫자 가능
// value 중복 가능 - 아무타입이나 OK

const americano = {
    name: "아메리카노",
    price: 2000,
    isIce: true,
    hasShot: true
};

// 호출 방식에 2가지 존재
// 1. dot 연산자
window.console.log(americano.name); // 아메리카노
window.console.log(americano.price); // 2000
window.console.log(americano.isIce); // true
window.console.log(americano.hasShot); // true

// 2. bracket[] 연산자
window.console.log(americano["name"]); // 아메리카노






// quiz 1
// 보드게임 Object 변수 만들기
// 이름: "할리갈리", 플레이어 수: 4, 소요시간(분): 10
const board_game = {
    game_name: "할리갈리",
    player_scale: 4,
    running_time: 10
};
window.console.log(`게임 이름은 ${board_game.game_name}입니다.`);
window.console.log(`게임 인원은 ${board_game.player_scale}입니다.`);
window.console.log(`게임 소요시간은 ${board_game.running_time}분 입니다.`);

// quiz 2
// 회원 Object 변수 만들기
// 회원 이름: "김태윤", 나이: 23, 눈시력 왼쪽: 1.2, 눈시력 오른쪽: 1.2
const member = {
    name: "김태윤",
    age: 23,
    eyes: {
        left: 1.2,
        right: 1.5
    }
};
window.console.log(`회원 이름은 ${member.name}입니다.`);
window.console.log(`회원 나이는 ${member.age}입니다.`);
window.console.log(`회원 왼쪽 눈 시력은 ${member.eyes.left}입니다.`);
window.console.log(`회원 오른쪽 눈 시력은 ${member.eyes.right}입니다.`);

// 없는 key를 요청하면 undefined(할당되지 않은 값)
window.console.log(member.living);
member.living = "포항";
window.console.log(member.living);
member.living = "인천"; // 인천으로 바뀜

delete member.name;
window.console.log(member.name);

