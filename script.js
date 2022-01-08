import { dataGet } from "./data.js";

const data = dataGet();
const container = document.querySelector(".container");
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
