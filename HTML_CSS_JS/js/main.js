//Declarando variaveis
var btnContact = document.querySelector(".jl-btn-contact");

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