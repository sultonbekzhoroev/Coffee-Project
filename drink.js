import { dataGet } from "./data.js";
console.log("drink.js");

const data = dataGet()[window.index];
console.log(data);
const img = document.querySelector("#img");
const description = document.querySelector("#description");
const ingredients = document.querySelector("#ingredients");
const category = document.querySelector("#category");
console.log(data.image);
img.innerHTML.src = data.image;
description.innerHTML = data.description;
