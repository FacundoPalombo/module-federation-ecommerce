import { faker } from "@faker-js/faker";

const mount = (el) => {
  let cartText = `<p>You have ${faker.random.numeric()} items in your cart</p>`;

  console.log(cartText);

  el.innerHTML += cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
