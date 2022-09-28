

export default class productDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    init() {

    }

    addToCart(e) {
        setLocalStorage("so-cart", products);
      }

    renderProductDetails() {
        
    }
}