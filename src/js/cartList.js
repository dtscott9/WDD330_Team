import { renderListWithTemplate, getLocalStorage } from './utils.js';
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
  }
  
  prepareTemplate(template, product) {
    
    template.querySelector('.cart-card__image img').src =  product.Image;
    template.querySelector('.cart-card__image img').alt += product.Name;
    template.querySelector('.card__name').textContent = product.Name;
    template.querySelector('.cart-card__color').textContent = product.Colors[0].ColorName;
    template.querySelector('.cart-card__price').textContent += product.FinalPrice; 
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
}