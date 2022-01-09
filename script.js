import { dataGet } from "./data.js";
console.log("script.js");

const data = dataGet();
const searchBar = document.querySelector(".search-form");

const button = document.querySelector(".btn");

function dataOut(data) {
  const section = document.querySelector(".section-center");

  const newDrinks = data
    .map((drink) => {
      const { title: name, image: image, id: id } = drink;
      return `<a class = "items">
   <img src="${image}" alt="${name}" id = "${id}"/>
    <h3>${name}</h3>
    </article>
    </a>`;
    })
    .join("");
  // href="./link.html"
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

const navToggle = document.querySelector(".nav-toggle");
const form = document.querySelector(".form");
const section = document.querySelector(".section-center");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
const logoImg = document.querySelector("img");
const items = document.querySelectorAll(".items");

if (items && items.length) {
  section.addEventListener("click", (e) => {
    const index = data.findIndex((elem, index, arr) => {
      return elem.id === parseInt(e.target.id, 16);
    });
    if (index !== -1) {
      console.log(data[index]);
      const w = window.open("http://127.0.0.1:5503/link.html", "");
      w.data = index;
    }
  });
}

navToggle.addEventListener("click", () => {
  if (ul.classList.contains("show-header-menu")) {
    ul.classList.remove("show-header-menu");
    section.style.display = "block";
    section.style.height = "auto";
    ul.style.display = "none";
    form.style.paddingTop = "50px";
    h2.style.display = "block";
  } else {
    ul.classList.add("show-header-menu");
    ul.style.paddingTop = "300px";

    h2.style.display = "none";
    ul.style.display = "block";
    ul.style.height = "100vh";
    section.style.display = "none";
  }
});
