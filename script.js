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

window.addEventListener('load', function(){
  const loadWrapper = this.document.querySelector('.load-wrapper');
  loadWrapper.parentElement.removeChild(loadWrapper);
})


// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}