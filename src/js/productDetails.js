import { setLocalStorage } from "./utils.js";

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
    document.querySelector("#addToCart").addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    this.generateCartAnimation;
    setLocalStorage("product name", JSON.stringify(this.product.Name));
  }

  generateCartAnimation() {
    const cart = document.querySelector(".cart");
    cart.classList.add("wobble");
    window.setTimeout(() => cart.classList.remove("wobble"), 1000)
  }

  renderProductDetails() {
    return `<section class="product-detail">
    <h3 class="product_brand">${this.product.Brand.Name}
    </h3>
    <h2 class="divider" class="product_name">
      ${this.product.NameWithoutBrand}
      Ajax Tent - 3-Person, 3-Season</h2>
    <img
      class="divider"
      src="${this.product.Image}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price"><s>$${this.product.SuggestedRetailPrice}
    
    </s></p>
    <p class="product-discount-price">$${this.product.ListPrice}
      <span id="discount">Save: $${Math.round(
        this.product.SuggestedRetailPrice - this.product.ListPrice)
      }</span></p>

    <p class="product__color">
      ${this.product.Colors[0].ColorName}
    </p>
    <p class="product__description">

      ${this.product.DescriptionHtmlSimple}

    </p>
    <div class="product-detail__add">
      
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div>
  </section>`;
  }
}
