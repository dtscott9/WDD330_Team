import { getLocalStorage } from "./utils";

export default class CheckoutProcess {
    constructor(key, outputSelector) {
      this.key = key;
      this.outputSelector = outputSelector;
      this.list = [];
      this.itemTotalCount = 0;
      this.itemTotalPrice = 0;
      this.shipping = 10;
      this.tax = 1.06;
      this.orderTotal = 0;
      this.init()
    }
    init() {
      this.list = getLocalStorage(this.key);
      this.calculateItemSummary();
    }
    calculateItemSummary() {
      // calculate and display the total amount of the items in the cart, and the number of items.
      console.log(this.list);
      this.itemTotalCount = this.list.length;
      this.list.forEach((item) => {

        this.itemTotalPrice += item.ListPrice;
      })
      this.shipping += 2 * (this.list.length - 1)
      this.calculateOrdertotal();
    }
    calculateOrdertotal() {
      // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
      this.orderTotal = this.itemTotalPrice * this.tax + this.shipping;
      // display the totals.
      this.displayOrderTotals();
    }
    displayOrderTotals() {
      // once the totals are all calculated display them in the order summary page
      document.querySelector("#subtotal").textContent += this.itemTotalPrice;
      document.querySelector("#shippingEstimate").textContent += this.shipping;
      document.querySelector("#tax").textContent += this.tax;
      document.querySelector("#total").textContent += this.orderTotal.toFixed(2);
    }
    
  }