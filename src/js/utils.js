// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage





export function getLocalStorage(key) {

  return JSON.parse(localStorage.getItem(key));

}



// save data to local storage
export function setLocalStorage(key, data) {
  let cartContents = getLocalStorage(key);
  if (!cartContents) {
    cartContents = [];
  }
  console.log(cartContents);
  cartContents.push(data);
  localStorage.setItem(key, JSON.stringify(cartContents));

  if (cartContents.length > 0)
  {
   cartNotify.innerHTML = cartContents;
   cartNotify.style.display = "initial";
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(template, parent, list, callback) {
  list.forEach(product => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, product);
    parent.appendChild(templateWithData);
  })
}