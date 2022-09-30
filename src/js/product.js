import productDetails from './productDetails.js';
import productData from './productData.js';
import { getParams } from './utils.js';
var dataSource = new productData('tents');
const productId = getParams('product');
const product = new productDetails(productId, dataSource);
// product.init();

dataSource = dataSource.findProductById(productId)
console.log(dataSource)

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
