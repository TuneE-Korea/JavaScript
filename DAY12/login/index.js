const id = document.querySelector(".id");
const pwd = document.querySelector(".pwd");
const id_demand = document.querySelector(".id_demand");

id.addEventListener("input", (e) => {
  const len = e.target.innerHTML.length;
  id_demand.style.color = len > 6 && len < 21 ? "#78e08f" : "black";
})