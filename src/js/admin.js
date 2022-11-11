import { loadHeaderFooter } from './utils.js';
import ExternalServices from "./ExternalServices.js"
loadHeaderFooter();



export default class Admin {
    constructor(outputSelector) {
        this.mainElement = document.querySelector(outputSelector);
        this.token = null;
        this.services = new ExternalServices();
        this.showLogin();
      }

      async showLogin() {
        const loginForm = document.querySelector(".login");
        const email = document.createElement("input");
        email.setAttribute("type", "email");
        email.setAttribute("placeholder", "Email");
        email.setAttribute("id", "email");
        const password = document.createElement("input")
        password.setAttribute("type", "password");
        password.setAttribute("placeholder", "Password");
        password.setAttribute("id", "password");
        const submitBUtton = document.createElement("input");
        submitBUtton.setAttribute("type", "submit");
        loginForm.appendChild(email);
        loginForm.appendChild(password);
        loginForm.appendChild(submitBUtton);
        loginForm.addEventListener("submit", (event) => {
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            this.login({"email": email, "password": password}, this.showOrders.bind(this))
        });

        

      }

      async showOrders() {
        try {
          const orders = await this.services.getOrder(this.token);
          orders.forEach(order => {
            const results = document.querySelector(".Order_Results");
            const name = document.createElement("h2");
            name.innerHTML = order.fname + ' ' + order.lname;
            const total = document.createElement('h3');
            total.innerHTML = order.orderTotal;

            results.appendChild(name);
            results.appendChild(total);
          });
          //this.mainElement.innerHTML = orderHtml();
          //const parent = document.querySelector('#orders tbody');
          // why not a template like we have done before?  The markup here was simple enough that I didn't think it worth the overhead...but a template would certainly work!
          //parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString('en-US')}</td><td>${order.items.length}</td><td>${order.orderTotal}</td></tr>`).join('');
        } catch(err) {
          console.log(err);
        }
      }

      async login(creds, next) {
      // I built the login method with a callback: next. 
      // This makes it much more flexible...
      // there could be many different things the user wants to do after logging in...
      // this allows us that flexibility without having to write a bunch of login methods
    
      try {
        this.token = await this.services.loginRequest(creds);
        next()
        
      } 
      catch(err) {
        // remember this from before?
        console.log(err.message);
      }
    }
}

const admin = new Admin;
