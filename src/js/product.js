import ProductData from './productData.js';
import productDetails from './productDetails.js';
import { getParam } from './utils.js';
import { loadHeaderFooter } from './utils.js';



const productId = getParam('product');
const dataSource = new ProductData();

const product = new productDetails(productId, dataSource);
product.init();