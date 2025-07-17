// array, list 타입
// 특징: 순서가 있음, 인덱스가 0부터 시작함, 요소의 데이터 타입으론 아무거나 OK
const fruits_list = ["수박", "사과", "바나나", "오렌지", "망고"];

window.console.log(fruits_list[0]); // 수박
window.console.log(fruits_list[4]); // 망고

fruits_list[5] = "키위"; // 추가
delete fruits_list[1] // 삭제 (순서가 바뀌지않음. 삭제된 위치는 비어있음)

window.console.log(fruits_list);
window.console.log(fruits_list[1]); // undefined

