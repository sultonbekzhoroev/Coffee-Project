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
      return `<a href="./drink.html" >
   <img src="${image}" alt="${name}" />
   <h3>${name}</h3>
   </article>
   </a>`;
    })
    .join("");

  section.innerHTML = newDrinks;
  // for (let i = 0; i < data.length; i++) {
  //   const divOfElements = document.createElement("div");
  //   const anchor = document.createElement("a");
  //   const title = document.createElement("p");
  //   const image = document.createElement("img");
  //   divOfElements.classList.add("divs-background");
  //   title.innerText = data[i].title;
  //   image.src = data[i].image;
  //   anchor.appendChild(title);
  //   anchor.appendChild(image);
  //   divOfElements.appendChild(anchor);
  //   container.appendChild(divOfElements);
  // }
}

// ya vot ne znayu perebor pravilnno rabotayet ili net vi proverte
const filterCoffee = (searchedName) => {
  const filteredData = [];
  for (let i = 0; i < data.length; i++) {
    const drinkName = data[i].title.toLowerCase();

    // if searhcString is ""
    if (searchedName == "") {
      return data;
    }

    if (drinkName.includes(searchedName.toLowerCase())) {
      filteredData.push(data[i]);
    }
  }
  return filteredData;

  // const filteredData = data.filter((coffeeObject) => {
  //   const drinkName = coffeeObject.title.toLowerCase();
  //   return drinkName.includes(searchedName.toLowerCase());
  // });
  // return filteredData;
};

// vsegda pisat nuzhno fnction pered tem kak vizivat
// inorder to load all data on first page
dataOut(filterCoffee(""));

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  // on kajdiy raz izmenayet ineer html izza etogo udallyat ne nuzhno
  console.log(dataOut(filterCoffee(searchString)));

  // console.log(searchString);
});
