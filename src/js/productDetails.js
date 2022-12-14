import { setLocalStorage, getLocalStorage, loadHeaderFooter } from "./utils.js";

loadHeaderFooter();
export default class productDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    // once we have the product details we can render out the HTML
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProductDetails();
    document.querySelector("#addToCart")
            .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    // to fix the cart we need to get anything that is in the cart already.
    let cartContents = getLocalStorage('so-cart');
    //check to see if there was anything there
    if(!cartContents){
      cartContents = [];
    }

    
    // then add the current product to the list
    
  if (!cartContents.includes(this.productId)) {
    cartContents.push(this.product);
    setLocalStorage('so-cart', cartContents);
  }
    
    this.generateSuper(cartContents);
    this.generateCartAnimation();
  }

  generateSuper(cartContents) {
    const productCount = cartContents.length;
    const cartNotify = document.querySelector(".cart_notify");
    if (productCount > 0)
    {
      cartNotify.innerHTML = productCount;
      cartNotify.style.display = "initial";
    }
  }

  generateCartAnimation() {
    const cart = document.querySelector(".cart");
    cart.classList.add("wobble");
    window.setTimeout(() => cart.classList.remove("wobble"), 1000)
  }

  renderProductDetails() {
    return `<section class="product-detail"> <h3 class="product_brand">${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Images.PrimaryLarge}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price"><s>$${this.product.FinalPrice}</s></p>
    <p class="product-discount-price">$${this.product.ListPrice}
      <span id="discount">Save: $${Math.round(
        this.product.FinalPrice - this.product.ListPrice)
      }</span></p>

    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
      ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div>
  </section>`;
  }
}
