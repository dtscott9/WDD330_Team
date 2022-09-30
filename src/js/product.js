import ProductData from './productData.js';
import productDetails from './productDetails.js';
import { getParam } from './utils.js';
const productId = getParam('product');
const dataSource = new ProductData('tents');
const product = new productDetails(productId, dataSource);
product.init();

let products = [];

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

getData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
