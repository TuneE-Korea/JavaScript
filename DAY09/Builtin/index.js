// 참조 타입: Array, Object, Function, Date, Math

const a = new Date(); // a는 데이트 타입
// new 란 녀석은 백엔드에서 배울 예정. 지금은 그냥 외우자.

console.log(a);
console.log(a.getDate()); // 몇일인지 
console.log(a.toLocaleString()); // 현재 사는 지역 기준으로 날짜 & 시간 나타내기
console.log(a.toLocaleDateString()); // 날짜만 
console.log(a.toLocaleTimeString()); // 시간만

const b = Math.PI;