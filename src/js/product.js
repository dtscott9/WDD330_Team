import productDetails from './productDetails.js';
import ProductData from './productData.js';
import { getParam } from './utils.js';
const dataSource = new ProductData('tents');
const productId = getParam('product');
const product = new productDetails(productId, dataSource);
product.init();

let products = [];

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

getData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
