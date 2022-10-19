import { faker } from "@faker-js/faker";

let products = "";

for (let i = 0; i < 3; i++) {
  const productName = faker.commerce.productName();
  products += `<p>${productName}</p>`;
}

console.log(products);
const body = document.getElementById("root");

body.innerHTML += products;
body.style.background = "red";
body.style.width = "500px";
body.style.height = "200px";
