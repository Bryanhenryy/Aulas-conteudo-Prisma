// =========================
// MENU MOBILE
// =========================

const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-ul a");

// Cria botão do menu
const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Abrir menu");

document.querySelector(".header").appendChild(menuButton);


// Abrir e fechar menu
menuButton.addEventListener("click", () => {
    nav.classList.toggle("menu-open");

    if (nav.classList.contains("menu-open")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
});


// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("menu-open");
        menuButton.innerHTML = "☰";
    });
});


// =========================
// LINK ATIVO
// =========================

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// =========================
// ANIMAÇÃO AO APARECER
// =========================

const elementsToAnimate = document.querySelectorAll(
    ".section, .skill-card, .project-card, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


elementsToAnimate.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});


// =========================
// ANO AUTOMÁTICO
// =========================

const year = document.querySelector(".footer-year");

if (year) {
    year.textContent = new Date().getFullYear();
}