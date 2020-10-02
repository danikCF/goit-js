import gallery from "./gallery-items.js"
// console.log(gallery);
// создаем элемент списка галереи
const ulGallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxButton = document.querySelector(".lightbox__button");

 const galleryItems = gallery.map((object) => {
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    
    img.setAttribute("src",object.preview);
    img.setAttribute("data-source",object.original);
    img.setAttribute("alt", object.description);
    
    const link = document.createElement("a");
    link.classList.add("gallery__image");
    link.setAttribute("href",object.original);
    
    link.append(img);   
        
    const item = document.createElement("li");
     item.classList.add("gallery__item");
     item.append(link);
    
     
     return item ; 
 });
 
 ulGallery.append(...galleryItems);

 ulGallery.addEventListener("click",(event)=>{
     event.preventDefault();
     if (event.target.nodeName === "IMG"){
     const newSrc = event.target.dataset.source;
     console.log(newSrc);
     lightbox.classList.add("is-open");
     lightboxImage.src = newSrc;
     }
 });

 function closeLightBox (event){
    if (event.target.nodeName !== "IMG"){
        lightbox.classList.remove("is-open");
        lightboxImage.src = "";
       }
 }
 lightboxButton.addEventListener("click", closeLightBox);
 lightbox.addEventListener("click",closeLightBox);
   