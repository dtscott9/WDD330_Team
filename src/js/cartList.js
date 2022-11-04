import { renderListWithTemplate, getLocalStorage, setLocalStorage } from './utils.js';

export default class CartList {

  constructor (key, listElement) {
    this.key = key;
    this.listElement = listElement;
    this.productIdList = [];
  }

  async init() {
    this.productIdList = [];
    const list = getLocalStorage(this.key);
    this.renderList(list);
    this.getTotal();
    this.display_total();
  }
  
  prepareTemplate(template, product) {
    if (this.productIdList.includes(product.Id)) {
      // If the product has already been displayed, return
      template = "";
      return template;

    } 
    this.productIdList.push(product.Id);
    console.log(product);
    template.querySelector('.cart-card__image img').src =  product.Images.PrimarySmall;
    // template.querySelector(".cart-card__image img").src = product.Image;
    template.querySelector('.cart-card__image img').alt += product.Name;
    template.querySelector('.card__name').textContent = product.Name;
    // template.querySelector('.cart-card__color').textContent = product.Colors[0].ColorName;
    const itemId = product.Id;
    const cart = getLocalStorage("so-cart")
    var quantity = 0;
    const quantityLabel = template.querySelector(".cart-card__quantity")
    template.querySelector('.cart-card__price').textContent += product.FinalPrice; 

    // Remove from cart event listener
    template.querySelector(".cart-card__remove").addEventListener("click", () => {
          
      for (let i=0; i < cart.length; i++) {
        if (cart[i].Id == itemId) {
          cart.splice(i, 1);
          setLocalStorage("so-cart", cart)
          location.reload();
        }
      }
    })

    for (let i=0; i < cart.length; i++) {
      if (cart[i].Id == itemId) {
        quantity +=1
        quantityLabel.textContent = quantity
      }
    }


    return template;
  }


  renderList(list) {

    // make sure the list is empty
    this.listElement.innerHTML = '';
    //get the template
    const template = document.getElementById('cart-card-template');
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate.bind(this));

   
    
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
    totalElement.textContent += `$${total.toFixed(2)}`;
  }
}