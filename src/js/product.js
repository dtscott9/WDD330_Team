import ProductData from './productData.js';
import { getParam } from './utils.js';
const dataSource = new ProductData('tents');
const productId = getParam('product');
console.log(dataSource.findProductById(productId));

let products = [];

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// add to cart button event handler
function addToCart(e) {
  setLocalStorage("so-cart", products);
}

getProductsData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
