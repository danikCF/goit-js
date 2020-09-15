const categories = document.getElementById("categories");
console.dir(categories);
console.log(`В списке  ${categories.childElementCount} категории`);
const item = categories.children;
for (let obj of item){
    console.log(`Категория:`,obj.children[0].textContent);
    console.log(`Количество елементов:`,obj.children[1].children.length);
}



