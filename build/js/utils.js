export function qs(t,e=document){return e.querySelector(t)}export function getLocalStorage(t){return JSON.parse(localStorage.getItem(t))}export function setLocalStorage(t,e){localStorage.setItem(t,JSON.stringify(e))}export function setClick(t,e){qs(t).addEventListener("touchend",r=>{r.preventDefault(),e()}),qs(t).addEventListener("click",e)}export function getParam(t){const e=window.location.search,r=new URLSearchParams(e);return r.get(t)}export function renderListWithTemplate(t,e,r,n){}
