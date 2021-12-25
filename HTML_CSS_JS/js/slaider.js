
//Portifolio slaider 

//declarando variaveis do slaider 
var slaiderContainer = document.querySelector(".jl-slider-container");
var slaiderList = document.querySelector(".jl-slaider-list");
var slaiderItem = document.querySelectorAll(".jl-slaider-item");
var slaiderListWidth = null;

//Capturando as larguras individuais 

var containerWidth = slaiderContainer.parentElement.offsetWidth;

//Passando as laguras dinamicas

slaiderContainer.style.width = containerWidth + "px";
for (let p = 0; p < slaiderItem.length; p++) {
    slaiderItem[p].style.width = containerWidth + "px";
    var slaiderItemWidth = slaiderItem[p].offsetWidth;

    slaiderListWidth += slaiderItemWidth;
}

slaiderList.style.width = slaiderListWidth + "px";


// Fazendo a animaçao slaider onClick 

var prevItem = document.querySelector(".jl-item-prev");
var nextItem = document.querySelector(".jl-item-next");
var slaiderPos = 0;

// HANDLERS

//Next Slaide Animaçao

var nextSlaideAnim = function () {
    var lastItem = slaiderListWidth - containerWidth;

    if (-1 * (slaiderPos) === lastItem) {
        return;
    }

    slaiderPos -= containerWidth;
    anime({
        targets: slaiderList,
        translateX: slaiderPos
    });
};

// Prev slaide Animaçao

var prevSlaindeAnim = function () {
    if (slaiderPos === 0) {
        return;
    }

    slaiderPos += containerWidth
    anime({
        targets: slaiderList,
        translateX: slaiderPos
    })
};


nextItem.addEventListener("click", function () {
    nextSlaideAnim();
});

prevItem.addEventListener("click", function () {
    prevSlaindeAnim();
})
