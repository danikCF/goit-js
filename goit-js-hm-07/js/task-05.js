const myInput = document.querySelector('#name-input');
console.log(myInput);
const mySpan = document.querySelector('#name-output');
myInput.addEventListener("input",()=>{
    if(myInput.value === ""){
    mySpan.textContent = "незнакомец";
}else{
    console.log(mySpan);
    mySpan.textContent = myInput.value;
}   
});