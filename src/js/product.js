import ProductData from './productData.js';
const dataSource = new ProductData('tents');
console.log(dataSource.getData());

let products = [];

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// add to cart button event handler
function addToCart(e) {
  setLocalStorage("so-cart", product);
}

getProductsData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
