import ProductData from './productData.js';
import productDetails from './productDetails.js';
import { getParams } from './utils.js';
const productId = getParams('product');
var dataSource = new ProductData('tents');
const product = new productDetails(productId, dataSource);
// product.init();

dataSource = dataSource.findProductById(productId)
console.log(dataSource)

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
