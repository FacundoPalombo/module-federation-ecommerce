import { faker } from "@faker-js/faker";

let cartText = `<p>You have ${faker.random.numeric()} items in your cart</p>`;

console.log(cartText);
const body = document.getElementById("dev-cart");

body.innerHTML += cartText;
