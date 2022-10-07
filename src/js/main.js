import ProductData from "./productData";
import ProductList from "./productList";

const list = document.querySelector(".product-list")
const productData = new ProductData("tents");
const productList = new ProductList("tents", productData, list);

