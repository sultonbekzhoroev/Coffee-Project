import { dataGet } from "./data.js";

const data = dataGet();
const container = document.querySelector(".container");
const searchBar = document.querySelector(".search-form");
const button = document.querySelector(".btn");

function dataOut(data) {
    const section = document.querySelector(".section-center");

/* anara*/
    const newDrinks = data
        .map((drink) => {
            const { title: name, image: image } = drink;
            return `<a href="./drink.html" >
            <article>

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

/*anara*/
/* responsive */

const navToggle = document.querySelector(".nav-toggle");
const headerMenu = document.querySelector("#header_menu");
const form = document.querySelector(".form");
const section = document.querySelector(".section-center");
const article = document.querySelector("article");
const header = document.querySelector("header");
const h2 = document.querySelector("h2");
const closeMenu = document.querySelector(".closeMenu");
const ul = document.querySelector("ul")


navToggle.addEventListener("click", () => {


        if (ul.classList.contains("show-header-menu")) {
            ul.classList.remove("show-header-menu");
            section.style.display = "block";
            section.style.height = "auto";
            ul.style.display = "none";
            form.style.paddingTop = "50px";
            h2.style.display = "block"



        } else {
            ul.classList.add("show-header-menu")
            ul.style.paddingTop = "300px";
            h2.style.display = "none";
            ul.style.display = "block";
            ul.style.height = "100vh"



            //section.style.display = "none";
        }





    })
    /* 
    navToggle.addEventListener("click", () => {
        headerMenu.style.display = "block";
        headerMenu.style.top = "0";
        headerMenu.style.height = "100vh"
        section.style.display = "none"


    });
    closeMenu.addEventListener("click", () => {
        headerMenu.style.top = "-100%";

    }); */

window.addEventListener('load', function(){
  const loadWrapper = this.document.querySelector('.load-wrapper');
  loadWrapper.parentElement.removeChild(loadWrapper);
})

