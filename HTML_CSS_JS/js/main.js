//Declarando variaveis
var btnContact = document.querySelector(".jl-btn-contact");
var toggleModal = document.querySelectorAll(".jl-toggle-modal");

//Page preloader
window.addEventListener("load", function () {
    var pagePreloader = this.document.querySelector(".jl-preloader");
    pagePreloader.classList.add("jl-fade-out");

    setTimeout(function () {
        pagePreloader.style.display = "none";
    }, 2000)
})

//Declarando informaçoes de contato
btnContact.addEventListener("click", function () {
    var boxContact = document.querySelector(".jl-contact-info");
    boxContact.classList.toggle("jl-is-open");

    this.classList.toggle("jl-change-ico");
})

//  Abrindo e fechando o modal  Orçammento 

for (let i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener("click", function () {
        var overlay = document.querySelector(".jl-overlay");
        var modalOrcamento = document.querySelector("#jl-modal-orcamento");

        overlay.classList.toggle("jl-is-open");
        modalOrcamento.classList.toggle("jl-is-open");
        modalOrcamento.classList.toggle("jl-slaid-top-in");

    })

}

// Anmando elementos on Scroll com Waypoits

var myScrollDown = document.querySelector(".jl-scroll-down")
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function (direction) {
        myScrollDown.classList.toggle("jl-fade-out")
    },
    offset: "80%"
})


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

nextItem.addEventListener("click", function () {
    var lastItem = slaiderListWidth - containerWidth;

    if (-1 * (slaiderPos) === lastItem) {
        return;
    }

    slaiderPos -= containerWidth;
    anime({
        targets: slaiderList,
        translateX: slaiderPos
    });
});

prevItem.addEventListener("click", function () {
    if (slaiderPos === 0) {
        return;
    }

    slaiderPos += containerWidth
    anime({
        targets: slaiderList,
        translateX: slaiderPos
    })
})
