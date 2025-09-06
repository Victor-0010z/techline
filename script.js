const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});
// Seleciona todos os elementos com a classe "reveal"
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight; // altura da tela
    const elementTop = reveals[i].getBoundingClientRect().top; // posição do elemento
    const elementVisible = 150; // margem para ativar antes

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("show"); // adiciona animação
    } else {
      reveals[i].classList.remove("show"); // tira caso queira sumir ao voltar
    }
    }
}

// Executa quando rolar a página
window.addEventListener("scroll", revealOnScroll);

// Executa uma vez na abertura (caso já tenha algo visível)
revealOnScroll();


var typed = new Typed(".typing-text", {
    strings: ["Saiba mais!"], // texto que será digitado
    typeSpeed: 100,  // velocidade para digitar
    backSpeed: 50,   // velocidade para apagar
    loop: true       // fica repetindo automaticamente
});