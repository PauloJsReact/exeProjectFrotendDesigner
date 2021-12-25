
//Portifolio slaider 

//declarando variaveis do slaider 
var slaiderContainer = document.querySelector(".jl-slider-container");
var slaiderList = document.querySelector(".jl-slaider-list");
var slaiderItem = document.querySelectorAll(".jl-slaider-item");
const slaiderTotalItens = slaiderItem.length;
var slaiderListWidth = null;
var prevItem = document.querySelector(".jl-item-prev");
var nextItem = document.querySelector(".jl-item-next");
var slaiderPos = 0;
var currentSlaide = document.querySelector(".jl-current-slaide");
var totalSlaide = document.querySelector(".jl-total-slaide");
var currentCounter = 1;


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

//Couter fomater
var counterFormatter = function (n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}

//CouterAdd 
var currentAdd = function () {
    if (currentCounter >= 0 && currentCounter < slaiderTotalItens) {
        currentCounter++;
        currentSlaide.innerHTML = counterFormatter(currentCounter);
    }
}

//couter remove
var currrentRemove = function () {
    if (currentCounter > 1 && currentCounter <= slaiderTotalItens) {
        currentCounter--;
        currentSlaide.innerHTML = counterFormatter(currentCounter);
    }
}

//Actions

totalSlaide.innerHTML = counterFormatter(slaiderTotalItens);

nextItem.addEventListener("click", function () {
    currentAdd();
    nextSlaideAnim();
});

prevItem.addEventListener("click", function () {
    prevSlaindeAnim();
    currrentRemove();
})
