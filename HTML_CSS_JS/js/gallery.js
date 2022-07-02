var overlay = document.querySelector(".jl-overlay");
var frameImage = document.querySelector(".jl-gallery-frame-image");
var frameContainer = document.querySelector(".jl-gallery-frame-container");
var galleryImages = document.querySelectorAll(".jl-thumb-box");
var closeGallery = document.querySelectorAll(".jl-toggle-gallery");
var btnNext = document.querySelector(".jl-item-next");
var btnPrev = document.querySelector(".jl-item-prev");
var currCounter = document.querySelector(".jl-current-slide");
var totalCounter = document.querySelector(".jl-total-slide");
var skeletonLoading = document.querySelector(".jl-skeleton-loading");


var postGallery = document.querySelector('.jl-post-gallery');
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (postGalleryHeight - 270) + 'px';

//Counter Formater
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

totalCounter.innerHTML = counterFormatter(galleryImages.length);


//Skeleton imagem 

const skeletonAnim = function (imagem) {
    var myImage = new Image();
    myImage.src = imagem;
    myImage.addEventListener("load", function () {
        skeletonLoading.classList.add("jl-fade-out");
        setTimeout(function () {
            skeletonLoading.style.display = "none";
        }, 2000)
    })
}

//Open gallery modal

const getImageSrc = function () {
    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener("click", function (con) {
            var imageSrc = this.querySelector("img").getAttribute("data-src");
            var itemNum = this.querySelector("img").getAttribute("data-item");

            skeletonLoading.style.display = "flex";

            frameImage.setAttribute("src", imageSrc);
            frameImage.setAttribute("data-index", itemNum);

            overlay.classList.add("jl-is-open");
            frameContainer.classList.add("jl-is-open");

            currCounter.innerHTML = counterFormatter(itemNum);
            skeletonAnim(imageSrc)
        })

    }
}
getImageSrc();



for (let i = 0; i < closeGallery.length; i++) {
    closeGallery[i].addEventListener("click", function () {
        overlay.classList.remove("jl-is-open");
        frameContainer.classList.remove("jl-is-open");
    })

}



const nextItem = function () {
    var currItem = parseInt(frameImage.getAttribute("data-index"));
    var nextIntemNum = currItem + 1;

    for (let n = 0; n < galleryImages.length; n++) {
        var item = galleryImages[n].querySelector("img");

        var itemNum = parseInt(item.getAttribute("data-item"));

        if (nextIntemNum === itemNum) {
            var nextSrc = item.getAttribute("data-src");
            var nextIndex = item.getAttribute("data-item");

            skeletonLoading.style.display = "flex";

            frameImage.setAttribute("src", nextSrc);
            frameImage.setAttribute("data-index", nextIndex);

            currCounter.innerHTML = counterFormatter(nextIndex);
            skeletonAnim(nextSrc);
        }

    }
}


const prevItem = function () {
    var currItemP = parseInt(frameImage.getAttribute("data-index"));
    var prevItemNum = currItemP - 1;


    for (let p = 0; p < galleryImages.length; p++) {
        var itemNumP = galleryImages[p].querySelector("img");
        var itemNumPrev = parseInt(itemNumP.getAttribute("data-item"));

        if (prevItemNum === itemNumPrev) {
            var prevSrc = itemNumP.getAttribute("data-src");
            var prevIdex = itemNumP.getAttribute("data-item");

            skeletonLoading.style.display = "flex";

            frameImage.setAttribute("src", prevSrc);
            frameImage.setAttribute("data-index", prevIdex);

            currCounter.innerHTML = counterFormatter(prevIdex);
            skeletonAnim(prevSrc);
        }
    }
}

btnNext.addEventListener("click", function () {
    nextItem();
})

btnPrev.addEventListener("click", function () {
    prevItem();
})