const nintendo = [
  { title: "마리오 카트", genre: ["레이싱", "아케이드"], price: 59800, multiplayer: true},
  { title: "포켓몬스터", genre: ["RPG", "어드벤처"], price: 64800, multiplayer: false},
  { title: "동물의 숲", genre: ["RPG", "힐링"], price: 64800, multiplayer: true},
  { title: "별의 커비", genre: ["액션", "어드벤처"], price: 49800, multiplayer: false},
  { title: "슈퍼마리오 오디세이", genre: ["액션", "어드벤처", "아케이드"], price: 79800, multiplayer: false}
]

// 1. 가격이 60000원 이하이고, 멀티플레이가 되는 게임 리스트
// console.log(nintendo.filter((x) => x.price <= 60000 && x.multiplayer));

// 2. 장르가 어드벤처이고, 가격이 60000원 이상인 게임 리스트
// console.log(nintendo.filter((x) => x.genre.some((item) => item == "어드벤처") && x.price >= 60000));

// 3. 멀티 플레이어가 안되고, 장르가 어드벤처인 게임 리스트
// console.log(nintendo.filter((item) => !item.multiplayer && item.genre.some((y) => y == "어드벤처")));


// some()과 every()의 중요성을 잘 알게 되었다..
// + 어떤 배열 요소에 특정값이 "있는지 없는지"를 확인할때,
// 확인하고 싶은 값이 "문자"라면, 
// 1. [some() 사용] ex) .filter((x) => x.내용.some((y) => y == "확인할 값"));
// 2. [includes() 사용] ex) .filter((x) => x.내용.includes("확인할 값"));