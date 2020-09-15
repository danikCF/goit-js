const input = document.querySelector("#validation-input");
input.addEventListener('blur',() => {
    const inputValue = input.value.length;
    const dataValue = input.dataset.length;
    if(inputValue === +dataValue){
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else{
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
});