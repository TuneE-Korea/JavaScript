// 산술 연산자
// +, -, *, /, %(나머지), **(제곱)
const a = 1 + 3 // 4
const a1 = 2 - 3 // -1
const a2 = 2 * 4 // 8
const a3 = 3 / 3 // 1
const a4 = 2 % 3 // 2
const a5 = 2 ** 4 // 16

// 대입 연산자
// = 
const b = "떡볶이"
const b1 = "보끔밥"

// 비교 연산자 [boolean타입으로 바뀜]
// >,<
const c = 5 > 3 // true
const c1 = 5 < 3 // false
const c2 = 5 >= 3 // true
const c3 = 5 <= 3 // false
const c4 = 10 == 11 // flase
const c5 = 10 != 11 // true

// 논리 연산자
// &&(and), ||(or), !(not)
// &&(and): 모두 true이어야 true
// ||(or): 하나라도 true이면 true
const d = 5 > 3 && 10 > 9 // true 
const d1 = 1 == 2 || 2 == 4 || 3 == 3 // true
const d2 = !true // false
// d3 드모르간 법칙 적용
const d3 = !(5<=3) || !(3>10) // true
const d4 = 5 > 3 && 3 < 10 // true (d3의 결과와 동일)

// 삼항 연산 [조건 ? 값1 : 값2]
const e = true ? "떡볶이" : "순대" // 떡볶이
const e1 = false ? "아아" : "라떼" // 라떼
const e2 = 5 > 3 ? "집가고 싶음" : "수업함" // 집가고 싶음
const e3 = 10 < 9 ? "고기" : "회" // 회
