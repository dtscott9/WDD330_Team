var l=Object.defineProperty,a=(s,t,r)=>(typeof t!="symbol"&&(t+=""),t in s?l(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r),i=(s,t,r)=>new Promise((u,c)=>{var p=d=>{try{o(r.next(d))}catch(e){c(e)}},n=d=>{try{o(r.throw(d))}catch(e){c(e)}},o=d=>d.done?u(d.value):Promise.resolve(d.value).then(p,n);o((r=r.apply(s,t)).next())});import{setLocalStorage as h}from"./utils.js";export default class m{constructor(t,r){a(this,"products",JSON.parse(localStorage.getItem("product name"))||[]);this.productId=t,this.product={},this.dataSource=r}init(){return i(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){this.generateCartAnimation(),products.push(this.product.Name),localStorage.setItem("product name",JSON.stringify(products)),h("so-cart",products)}generateCartAnimation(){const t=document.querySelector(".cart");t.classList.add("wobble"),window.setTimeout(()=>t.classList.remove("wobble"),1e3)}renderProductDetails(){return`<section class="product-detail">
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
      <span id="discount">Save: $${Math.round(this.product.SuggestedRetailPrice-this.product.ListPrice)}</span></p>

    <p class="product__color">
      ${this.product.Colors[0].ColorName}
    </p>
    <p class="product__description">

      ${this.product.DescriptionHtmlSimple}

    </p>
    <div class="product-detail__add">
      
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div>
  </section>`}}
