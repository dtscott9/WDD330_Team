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
            this.login({email, password})
        });

        

      }

      async login(creds, next) {
      // I built the login method with a callback: next. 
      // This makes it much more flexible...
      // there could be many different things the user wants to do after logging in...
      // this allows us that flexibility without having to write a bunch of login methods
      console.log(creds);
      try {
        this.token = await this.services.loginRequest(creds);
        next()
        const res = await this.services.getOrder(this.token);
        console.log(res)
      } 
      catch(err) {
        // remember this from before?
        alertMessage(err.message.message);
      }
    }
}

const admin = new Admin;
