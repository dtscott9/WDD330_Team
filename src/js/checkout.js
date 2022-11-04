import { loadHeaderFooter } from './utils.js';
import CheckoutProcess from "./checkoutProcess.js";

const checkout = new CheckoutProcess("so-cart", "null");
loadHeaderFooter();

document.forms['checkout']
.addEventListener('submit', (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
   checkout.checkout();
});