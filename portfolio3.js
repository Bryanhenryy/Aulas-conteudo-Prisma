// ===== MENU HAMBÚRGUER =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('aberto');
    nav.classList.toggle('aberto');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('aberto');
        nav.classList.remove('aberto');
    });
});

// ===== NAV LINK ATIVO CONFORME O SCROLL =====
const secoes = document.querySelectorAll('section[id]');

function marcarLinkAtivo() {
    const posicaoScroll = window.scrollY + 120;

    secoes.forEach(secao => {
        const topo = secao.offsetTop;
        const altura = secao.offsetHeight;
        const id = secao.getAttribute('id');
        const linkCorrespondente = document.querySelector(`.nav-link[href="#${id}"]`);

        if (posicaoScroll >= topo && posicaoScroll < topo + altura) {
            navLinks.forEach(link => link.classList.remove('ativo'));
            if (linkCorrespondente) linkCorrespondente.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', marcarLinkAtivo);

// ===== SCROLL REVEAL (seções aparecendo suavemente) =====
const elementosReveal = document.querySelectorAll('.reveal');

const observerReveal = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
        }
    });
}, { threshold: 0.15 });

elementosReveal.forEach(el => observerReveal.observe(el));

// ===== BARRAS DE HABILIDADE ANIMADAS =====
const barrasHabilidade = document.querySelectorAll('.skill-fill');

const observerHabilidades = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('animar');
        }
    });
}, { threshold: 0.4 });

barrasHabilidade.forEach(barra => observerHabilidades.observe(barra));

// ===== BOTÃO VOLTAR AO TOPO =====
const botaoTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        botaoTopo.classList.add('visivel');
    } else {
        botaoTopo.classList.remove('visivel');
    }
});

botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== EFEITO DE DIGITAÇÃO NO H1 =====
const textoDigitado = document.getElementById('typed');
const texto = 'Bryan Henry';
let indice = 0;

function digitar() {
    if (indice < texto.length) {
        textoDigitado.textContent += texto.charAt(indice);
        indice++;
        setTimeout(digitar, 120);
    }
}

digitar();