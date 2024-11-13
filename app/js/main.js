import "../CSS/style.css";
import "../CSS/variable.css";
import { kidsData } from "../js/kids.js";

const DOMSelectors = {
  container: document.querySelector(".container"),
  children: document.querySelector(".children"),
  teenagers: document.querySelector(".teenagers"),
};

let idCounter = 0;

function displayCards(data) {
  DOMSelectors.container.innerHTML = ""; // Clear container first
  data.forEach((card) => {
    idCounter += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="card-${idCounter}">
        <h2 class="card-heading" id="heading-${idCounter}">${card.name}</h2>
        <h3 class="card-subheading" id="subheading-${idCounter}">Age: ${
        card.age
      }</h3>
        <p class="card-price">Price: $${card.price.toFixed(2)}</p>
        ${
          card.imageUrl
            ? `<img class="card-img" id="img-${idCounter}" src="${card.imageUrl}" alt="${card.altText}">`
            : ""
        }
      </div>`
    );
  });
}

// Initial display
displayCards(kidsData);

// Event listeners
DOMSelectors.children.addEventListener("click", () => {
  const filteredData = kidsData.filter((kid) => kid.age < 13);
  displayCards(filteredData);
});

DOMSelectors.teenagers.addEventListener("click", () => {
  const filteredData = kidsData.filter((kid) => kid.age >= 13 && kid.age < 20);
  displayCards(filteredData);
});
