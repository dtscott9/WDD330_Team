

export default class productDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        document.getElementById('addToCart')
        .addEventListener('click', this.addToCart.bind(this));
    }

    addToCart(e) {
        setLocalStorage("so-cart", products);
      }

    renderProductDetails() {
        
    }
}