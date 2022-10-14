import ProductData from './productData.js';
import productDetails from './productDetails.js';
import { getParam } from './utils.js';
import { loadHeaderFooter } from './utils.js';

loadHeaderFooter();
// import { setLocalStorage } from './utils.js';

const dataSource = new ProductData('tents');
const productId = getParam('product');

const product = new productDetails(productId, dataSource);
// const superscript = new setLocalStorage(key, data);
const productCount = localStorage.length;
const cartNotify = document.querySelector(".cart_notify");
if (productCount > 0)
{
   cartNotify.innerHTML = productCount;
   cartNotify.style.display = "initial";
}
product.init();