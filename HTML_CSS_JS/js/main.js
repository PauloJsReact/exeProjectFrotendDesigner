//Declarando variaveis
var btnContact = document.querySelector(".jl-btn-contact");
var toggleModal = document.querySelectorAll(".jl-toggle-modal");
var toggleMenu = document.querySelectorAll(".jl-toggle-menu");
var menuMobile = document.querySelector(".jl-menu-mob");
var btnIconMobileMenu = document.querySelector(".jl-btn-menu-mob ion-icon");

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

//Abrindo e fechando o Menu Moobile

for (let m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener("click", function () {
        var overlayMenu = document.querySelector(".jl-menu-overlay");
        overlayMenu.classList.toggle("jl-is-open")
        menuMobile.classList.toggle("jl-menu-is-closed");
        menuMobile.classList.toggle("jl-menu-is-open");

        var icon = btnIconMobileMenu.getAttribute("name");
        if (icon === "menu") {
            btnIconMobileMenu.setAttribute("name", "close");
        } else {
            btnIconMobileMenu.setAttribute("name", "menu");
        }
    })
}
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


// Animando elementos do Topbar com Waypoits

var triggerTopbar = document.querySelector(".jl-trigger-topbar");
var topbar = document.querySelector(".jl-topbar");
var logo = document.querySelector(".jl-logo");

var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function (direction) {
        topbar.classList.toggle("jl-topbar-bg");
        logo.classList.toggle("jl-logo-shorten")
    },
    offset: "50px"
})

