"use strict";
(() => {
 const q=(s)=>document.querySelector(s), all=(s)=>[...document.querySelectorAll(s)];
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const run=(el,name)=>{
   if(!el||reduced)return;
   el.classList.remove(name);void el.offsetWidth;el.classList.add(name);
   const end=()=>{el.classList.remove(name);el.removeEventListener("animationend",end);};
   el.addEventListener("animationend",end);
 };
 all("[data-bubble]").forEach(b=>b.addEventListener("click",()=>{
   if(b.getAttribute("aria-pressed")==="true")return;
   b.setAttribute("aria-pressed","true");b.querySelector(".bubble-closed").hidden=true;b.querySelector(".bubble-message").hidden=false;
   run(b,"bubble-pop");const n=all('[data-bubble][aria-pressed="true"]').length;
   q("#bubbleStatus").textContent=n===3?"¡Un mar de risas contigo! Ese es nuestro plan.":n+" de 3 sorpresas descubiertas.";
 }));
})();

