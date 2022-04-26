var overlay = document.querySelector(".jl-overlay");
var frameImage = document.querySelector(".jl-gallery-frame-image");
var  frameContainer = document.querySelector(".jl-gallery-frame-container");
var galleryImages = document.querySelectorAll(".jl-thumb-img");
var closeGallery = document.querySelectorAll(".jl-toggle-gallery");

const getImageSrc = function () {
    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener("click",function (con) {
           var imageSrc = this.getAttribute("data-src")
           frameImage.setAttribute("src",imageSrc);

           overlay.classList.add("jl-is-open");
           frameContainer.classList.add("jl-is-open");
        })
        
    }
}
getImageSrc();



for (let i = 0; i < closeGallery.length; i++) {
    closeGallery[i].addEventListener("click",function () {
        overlay.classList.remove("jl-is-open");
        frameContainer.classList.remove("jl-is-open");
    })
    
}