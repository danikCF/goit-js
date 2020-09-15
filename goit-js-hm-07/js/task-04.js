 const refs = {
     btnDecr: document.querySelector('[data-action="decrement"]'),
     span: document.querySelector("#value"),
     btnInct: document.querySelector('[data-action="increment"]')
 }

 let counterValue = refs.span.textContent;
 refs.btnDecr.addEventListener("click",() =>{
     if (counterValue > 0){
         counterValue--;
         refs.span.textContent=counterValue;
     }
 })
 refs.btnInct.addEventListener("click",() =>{
     counterValue++;
     refs.span.textContent=counterValue;
 });