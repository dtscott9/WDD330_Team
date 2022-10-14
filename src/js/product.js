import ProductData from './productData.js';
import productDetails from './productDetails.js';
import { getParam } from './utils.js';
import { loadHeaderFooter } from './utils.js';

loadHeaderFooter();
// import { setLocalStorage } from './utils.js';


const dataSource = new ProductData('tents');
const productId = getParam('product');

const product = new productDetails(productId, dataSource);
product.init();