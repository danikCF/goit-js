const categories = document.querySelectorAll('#categories .item');
console.log(`В списке  ${categories.length
} категории`);
categories.forEach(obj => {
    console.log(`Категория:${obj.children[0].innerText}`);
    console.log(`Количество елементов:${obj.children[1].children.length}`);
});


