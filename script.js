import { dataGet } from "./data.js";

const data = dataGet();
const container = document.querySelector(".container");
const searchBar = document.querySelector(".search-form");
const button = document.querySelector(".btn");

for (let i = 0; i < data.length; i++) {
  const divOfElements = document.createElement("div");
  const anchor = document.createElement("a");
  const title = document.createElement("p");
  const image = document.createElement("img");
  title.innerText = data[i].title;
  image.src = data[i].image;
  anchor.appendChild(title);
  anchor.appendChild(image);
  divOfElements.appendChild(anchor);
  container.appendChild(divOfElements);
}

const filterCoffee = (searchedName) => {
  // const filteredData = [];

  // for (let i = 0; i < data.length; i++) {
  //     const drinkName = data[i].title.toLowerCase();

  //     if (drinkName.includes(searchedName.toLowerCase())) {
  //         filteredData.push(data[i]);
  //     }
  // }
  // return filteredData;

  const filteredData = data.filter((coffeeObject) => {
    const drinkName = coffeeObject.title.toLowerCase();
    return drinkName.includes(searchedName.toLowerCase());
  });
  return filteredData;
};

const handleClick = () => {
  const searchCofeeName = searchBar.value;
  const filteredData = filterCoffee(searchCofeeName);
  console.log(filteredData);
};

button.addEventListener("click", handleClick);

// const filteredData = filterCoffee("black")
// console.log(filteredData)
