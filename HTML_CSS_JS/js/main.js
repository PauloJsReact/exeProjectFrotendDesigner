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