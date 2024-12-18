import "../CSS/style.css";
import "../CSS/variable.css";
import { kidsData } from "../js/kids.js";

const DOMSelectors = {
  container: document.querySelector(".container"),
  children: document.querySelector(".children"),
  teenagers: document.querySelector(".teenagers"),
  all: document.querySelector(".all"),
};

let idCounter = 0;

function displayCards(data) {
  DOMSelectors.container.innerHTML = "";

  data.forEach((card) => {
    idCounter += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="card-${idCounter}">
        <h2 class="card-heading" id="heading-${idCounter}">${card.name}</h2>
        <h3 class="card-subheading" id="subheading-${idCounter}">Age: ${
        card.age
      }</h3>
        <h3 class="card-price">Price: $${card.price.toFixed(2)}</h3>
        ${
          card.imageUrl
            ? `<img class="card-img" id="img-${idCounter}" src="${card.imageUrl}" alt="${card.altText}">`
            : ""
        }
      </div>`
    );
  });
}

displayCards(kidsData);

DOMSelectors.children.addEventListener("click", () => {
  const filteredData = kidsData.filter((kid) => kid.age < 13);
  displayCards(filteredData);
  document.body.classList.add("dark");
});

DOMSelectors.teenagers.addEventListener("click", () => {
  const filteredData = kidsData.filter((kid) => kid.age >= 13);

  DOMSelectors.container.innerHTML = filteredData
    .map(
      (kid) => `
      <div class="card">
        <h2>${kid.name}</h2>
        <p>Age: ${kid.age}</p>
        <p>Price: $${kid.price}</p>
        <img src="${kid.imageUrl}" alt="${kid.altText}" />
      </div>`
    )
    .join("");
});

DOMSelectors.all.addEventListener("click", () => {
  const filteredData = kidsData.filter((kid) => kid.age < 1000);
  displayCards(filteredData);
});

document.querySelector(".btn").addEventListener("click", function () {
  console.log("works");
});
