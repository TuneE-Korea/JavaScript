// 신문법 <- 사실 얘도 리액트 기준으론 구문법

const clothes = [
  {
  src: "cat.jpg",
  brand: "무신사 스탠다드",
  name: "플렉스 포스",
  price: "93,420원"
  },
  {
  src: "cat.jpg",
  brand: "무신사 스탠다드",
  name: "플렉스 포스",
  price: "93,420원"
  },
  {
  src: "cat.jpg",
  brand: "무신사 스탠다드",
  name: "플렉스 포스",
  price: "93,420원"
  },
  {
  src: "cat.jpg",
  brand: "무신사 스탠다드",
  name: "플렉스 포스",
  price: "93,420원"
  }
]

const item_tag = (itme) => `
    <div class="item">
        <img src="${itme.src}" alt="그냥 아무사진">
        <div class="info">
          <span class="brand">${itme.brand}</span>
          <span class="name">${itme.name}</span>
          <span class="price">${itme.price}</span>
        </div>
    </div>
`;

const box = document.querySelector(".box");
clothes.forEach((x) => box.insertAdjacentHTML("beforeend", item_tag(x)));

// 정리
// 1. 반복할 대상인 html 섹션을 하나 스크랩해온다. 해당 대상을 백틱으로 둘러싸고 변경될 수 있는 부분은 ${}로 만들어둔다.
// 2. 변경되는 내용들이 저장되어있는 배열을 선언한다. (위의 경우에는 clothes 객체)
// 3. 배열에 map()이나 forEach() 등의 배열 메서드를 사용해서 접근한다.
// 4. 붙여넣을 대상을 찾는다(querySelector()이용)
// 5. insertAdjacentHTML()을 이용하여 html 섹션 째로 붙여넣는다.