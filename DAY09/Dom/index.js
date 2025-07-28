// document -querySelector/All [html]
// element - innerHTML [tag] 


// 1. quertSelector("찾을 것") / querySelectorAll("찾을 것"): 찾기
const a = document.body.querySelector(".hi");
a.innerHTML = "수고하세용";
const b = document.querySelector(".text");
b.innerHTML = "내일은 화요일";

// quiz 1
// time 클래스의 element를 찾아서 현재 시간 나오도록 하기 (새로고침할때마다 최신화)
const t = new Date();
const cur_time = document.querySelector(".time");
cur_time.innerHTML = `현재 시간: ${t.toLocaleTimeString()} 입니다`;

// quiz 2
// Date() 종합 선물 세트
const cur_month = document.querySelector(".month");
const cur_date = document.querySelector(".date");
const cur_day = document.querySelector(".day");
const cur_hour = document.querySelector(".hour");
const cur_minute = document.querySelector(".minute");
const cur_second = document.querySelector(".second");
const days = ["일", "월", "화", "수", "목", "금", "토"];

cur_month.innerHTML = `현재 달: ${t.getMonth()+1}월|`;
cur_date.innerHTML = `현재 일자: ${t.getDate()}일|`;
cur_day.innerHTML = `현재 요일: ${days[t.getDay()]}요일|`;
cur_hour.innerHTML = `현재 시각: ${t.getHours()}시|`;
cur_minute.innerHTML = `현재 분: ${t.getMinutes()}분|`;
cur_second.innerHTML = `현재 초: ${t.getSeconds()}초|`;
