import { getLocalStorage } from "./utils.js";
import ExternalServices from "./ExternalServices.js"

const services = new ExternalServices();


function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}

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
      this.orderTotal = this.itemTotalPrice * 1.06 + this.shipping;
      this.tax = (this.itemTotalPrice * 0.06).toFixed(2);
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

    async checkout() {
      // build the data object from the calculated fields, the items in the cart, and the information entered into the form
      const formElement = document.forms["checkout"];
      const formData = formDataToJSON(formElement);

      formData.orderDate = new Date();
      formData.orderTotal = this.orderTotal;
      formData.tax = this.tax;
      formData.shipping = this.shipping;
      formData.items = packageItems(this.list);
      
      console.log(formData);
      // call the checkout method in our ExternalServices module and send it our data object.
      try {
        const res = await services.checkout(formData);
        console.log(res);
      } catch(err) {
        console.log(err);
      }
    }
    
  }