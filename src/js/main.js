import { loadHeaderFooter } from './utils.js';




loadHeaderFooter();

const visit = localStorage.getItem("firstVisit");
if (visit) {
    localStorage.setItem("firstVisit", "false");
} else {
    console.log("its your first visit!")
    alert("Welcome to Sleep Outside.  Register with us to qualify for a 5% discount on your first order!")
    localStorage.setItem("firstVisit", "true")
}