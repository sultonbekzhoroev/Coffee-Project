import { dataGet } from "./data.js";

const data = dataGet();
const searchBar = document.querySelector(".search-form");

const button = document.querySelector(".btn");

function dataOut(data) {
  const section = document.querySelector(".section-center");

  const newDrinks = data
    .map((drink) => {
      const { title: name, image: image } = drink;
      return `<a href="./link.html" >
   <img src="${image}" alt="${name}" />
   <h3>${name}</h3>
   </article>
   </a>`;
    })
    .join("");

  section.innerHTML = newDrinks;
}
const filterCoffee = (searchedName) => {
  const filteredData = [];
  for (let i = 0; i < data.length; i++) {
    const drinkName = data[i].title.toLowerCase();
    if (searchedName == "") {
      return data;
    }

    if (drinkName.includes(searchedName.toLowerCase())) {
      filteredData.push(data[i]);
    }
  }
  return filteredData;
};

dataOut(filterCoffee(""));

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(dataOut(filterCoffee(searchString)));
});

window.addEventListener("load", function () {
  const loadWrapper = this.document.querySelector(".load-wrapper");
  loadWrapper.parentElement.removeChild(loadWrapper);
});

/* filter btn */

const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  dataOut(data);
  displayMenuButtons();
});

function displayMenuButtons() {
  const categories = data.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = data.filter(function (data) {
        // console.log(menuItem.category);
        if (data.category === category) {
          return data;
        }
      });
      if (category === "all") {
        dataOut(data);
      } else {
        dataOut(menuCategory);
      }
    });
  });
}

// Получить модальный
const modal = document.getElementById("myModal");

// получаем кнопку регистрации
const registerBtn = document.querySelector(".registerbtn");

// Ставим флаг на то, зареган пользватель или нет
let isRegistered = false;

// Приветственное сообщение после регистрации
const welcomeMessage = document.querySelector(".welcome-message");
/* Все инпуты взяты в отдельный блок с классом form-content чтобы этот блок легко было скрыть
 */
const formContent = document.querySelector(".form-content");

// Получить кнопку, которая открывает модальный
let butn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// //store submit button
let register = document.querySelector(".registerbtn");

// //store message after submit
// let message = document.querySelector("#response");

// Когда пользователь нажимает на кнопку, откройте модальный
butn.onclick = function () {
  modal.style.display = "block";
};

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
  modal.style.display = "none";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

registerBtn.addEventListener("click", function (event) {
  event.preventDefault(); // отменяем стандартное поведение браузера
  isRegistered = true; // по клику флаг зарегистрирован, переводим в true
  welcomeMessage.style.display = "block"; // показываем привественное сообщение
  formContent.style.display = "none"; // скрываем весь блок с инпутами
});

const navToggle = document.querySelector(".nav-toggle");
const form = document.querySelector(".form");
const section = document.querySelector(".section-center");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
const logoImg = document.querySelector("img");
// const giftBtn = document.querySelector("#myBtn");

navToggle.addEventListener("click", () => {
  if (ul.classList.contains("show-header-menu")) {
    ul.classList.remove("show-header-menu");
    section.style.display = "block";
    section.style.height = "auto";
    ul.style.display = "none";
    form.style.paddingTop = "50px";
    h2.style.display = "block";
    // giftBtn.display = "center";
  } else {
    ul.classList.add("show-header-menu");
    ul.style.paddingTop = "300px";

    h2.style.display = "none";
    ul.style.display = "block";
    ul.style.height = "100vh";
    section.style.display = "none";
  }
});
