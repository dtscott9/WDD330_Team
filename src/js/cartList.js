import { renderListWithTemplate, getLocalStorage, setLocalStorage } from './utils.js';
import productDetails from './productDetails.js';

export default class CartList {
  constructor (key, listElement) {
    this.key = key;
    this.listElement = listElement;
  }

  async init() {
    const list = getLocalStorage(this.key);
    this.renderList(list);
    this.getTotal();
    this.display_total();
  }
  
  prepareTemplate(template, product) {
    console.log(product);
    template.querySelector('.cart-card__image img').src =  product.Images.PrimarySmall;
    // template.querySelector(".cart-card__image img").src = product.Image;
    template.querySelector('.cart-card__image img').alt += product.Name;
    template.querySelector('.card__name').textContent = product.Name;
    // template.querySelector('.cart-card__color').textContent = product.Colors[0].ColorName;
    template.querySelector('.cart-card__price').textContent += product.FinalPrice; 
    template.querySelector(".cart-card__remove").addEventListener("click", () => {
      const itemId = product.Id;
      console.log(itemId);
      const cart = getLocalStorage("so-cart")
      for (let i=0; i < cart.length; i++) {
        if (cart[i].Id == itemId) {
          console.log("hello")
          cart.splice(i, 1);
          console.log(cart);
          setLocalStorage("so-cart", cart)
          location.reload();
        }
      }
    })
    return template;
  }


  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = '';
    //get the template
    const template = document.getElementById('cart-card-template');
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    
  }

  getTotal() {
    let cartNum = getLocalStorage('so-cart');
    const count = cartNum.length;
    const cartEmpty = document.querySelector(".cart-footer hide");
    if (!count) {
      cartEmpty.innerHTML = count;
      cartEmpty.style.display = "none";
    }
  }

  display_total() {
    const totalElement = document.querySelector(".cart-total");
    let cartItems = getLocalStorage('so-cart');
    var total = 0;
    cartItems.forEach((item) => {
      total += item.ListPrice
    });
    totalElement.textContent += `$${total}`;
  }
}