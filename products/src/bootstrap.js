import { faker } from "@faker-js/faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const productName = faker.commerce.productName();
    products += `<p>${productName}</p>`;
  }

  console.log(products);

  el.innerHTML += products;
  el.style.background = "red";
  el.style.width = "500px";
  el.style.height = "200px";
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-products");
  if (el) {
    mount(el);
  }
}
export { mount };
