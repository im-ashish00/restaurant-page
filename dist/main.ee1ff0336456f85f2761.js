(()=>{var e={734:(e,t,r)=>{e.exports=r.p+"img/contact.svg"},346:(e,t,r)=>{e.exports=r.p+"img/home.jpg"},396:(e,t,r)=>{e.exports=r.p+"img/menu.jpg"}},t={};function r(n){var c=t[n];if(void 0!==c)return c.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";function e(e){const t=document.createElement("a");return t.setAttribute("href","#"),t.classList.add("navbar__link"),t.innerText=e,t}r(734),r(346),r(396),function(){const t=document.querySelector(".content"),r=document.createElement("div");r.classList.add("navbar"),t.appendChild(r),r.appendChild(e("HOME")),r.appendChild(e("MENU")),r.appendChild(e("CONTACT"))}(),function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("desc"),e.appendChild(t),t.innerHTML='<img src="./img/home.jpg"><br>WELCOME!!',document.querySelector(".desc"),document.addEventListener("click",(e=>{switch(e.target.innerText){case"MENU":document.querySelector(".desc").innerHTML='<img src="./img/menu.jpg"><br>';break;case"CONTACT":document.querySelector(".desc").innerHTML='<a href="https://github.com/Ash-ishSharma/"><img src="./img/contact.svg" class="contact-icon"></a><br>Made with 💙 by Ashish';break;case"HOME":document.querySelector(".desc").innerHTML='<img src="./img/home.jpg"><br>WELCOME!!'}}))}()})()})();