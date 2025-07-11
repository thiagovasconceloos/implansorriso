$(document).ready(function(){
    // Inicialização do Slick Carousel para os depoimentos
    $('.regular').slick({
        dots: true,          // Mostra os indicadores de slide (bolinhas)
        infinite: true,      // Permite o carrossel continuar infinitamente
        slidesToShow: 1,     // Mostra um slide por vez
        slidesToScroll: 1,   // Move um slide por vez
        autoplay: true,      // Inicia o autoplay
        autoplaySpeed: 5000, // Intervalo de 5 segundos entre os slides
        arrows: true,        // Mostra as setas de navegação
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false // Esconde as setas em telas menores (opcional)
                }
            }
        ]
    });

    // Funcionalidade do Menu Hamburguer para Responsividade
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (hamburger && navList) { // Garante que os elementos existem
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Fechar o menu ao clicar em um link (para mobile)
        document.querySelectorAll('.nav-list li a').forEach(item => {
            item.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    hamburger.querySelector('i').classList.remove('fa-times');
                    hamburger.querySelector('i').classList.add('fa-bars');
                }
            });
        });

        // Fechar o menu ao clicar fora dele (para mobile)
        document.addEventListener('click', (event) => {
            if (!navList.contains(event.target) && !hamburger.contains(event.target) && navList.classList.contains('active')) {
                navList.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    }


    // Animação de Scroll Suave para as âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) { // Verifica se o elemento alvo existe
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});