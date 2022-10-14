import ProductData from "./productData";
import ProductList from "./productList";
import { loadHeaderFooter } from './utils.js';

loadHeaderFooter();

const productData = new ProductData("tents");
const list = document.querySelector(".product-list")
const productList = new ProductList("tents", productData, list);

productList.init();