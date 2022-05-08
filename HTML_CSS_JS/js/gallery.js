var overlay = document.querySelector(".jl-overlay");
var frameImage = document.querySelector(".jl-gallery-frame-image");
var  frameContainer = document.querySelector(".jl-gallery-frame-container");
var galleryImages = document.querySelectorAll(".jl-thumb-img");
var closeGallery = document.querySelectorAll(".jl-toggle-gallery");
var btnNext =document.querySelector(".jl-item-next");
var btnPrev = document.querySelector(".jl-item-prev");

const getImageSrc = function () {
    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener("click",function (con) {
           var imageSrc = this.getAttribute("data-src");
           var itemNum = this.getAttribute("data-item");

           frameImage.setAttribute("src",imageSrc);
           frameImage.setAttribute("data-index",itemNum);

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



const nextItem  = function () {
    var currItem = parseInt(frameImage.getAttribute("data-index"));
    var nextIntemNum = currItem + 1;

    for (let n = 0; n < galleryImages.length; n++) {
        var item = galleryImages[n];
       
        var itemNum = parseInt(item.getAttribute("data-item"));

        if (nextIntemNum === itemNum ) {
            var nextSrc = item.getAttribute("data-src");
            var nextIndex = item.getAttribute("data-item");

            frameImage.setAttribute("src",nextSrc);
            frameImage.setAttribute("data-index",nextIndex);
        }
        
    }
}


const prevItem = function () {
    var currItemP = parseInt(frameImage.getAttribute("data-index"));
    var prevItemNum = currItemP - 1;


    for (let p = 0; p < galleryImages.length; p++) {
        var itemNumP = galleryImages[p];
        var itemNumPrev = parseInt(itemNumP.getAttribute("data-item"));

        if (prevItemNum === itemNumPrev ) {
            var prevSrc = itemNumP.getAttribute("data-src");
            var prevIdex = itemNumP.getAttribute("data-item");

            frameImage.setAttribute("src",prevSrc);
            frameImage.setAttribute("data-index",prevIdex);
        }
    }
}

btnNext.addEventListener("click",function() {
    nextItem();
})

btnPrev.addEventListener("click",function () {
    prevItem();
})