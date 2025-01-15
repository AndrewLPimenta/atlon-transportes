// Função callback que será chamada quando a interseção acontecer
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'visible' quando o elemento se torna visível
            entry.target.classList.add('visible');
        } else {
            // Remove a classe 'visible' quando o elemento sai de vista
            entry.target.classList.remove('visible');
        }
    });
};

// Opções do observer - Threshold define a porcentagem do elemento visível antes de disparar a animação
const observerOptions = {
    threshold: 0.01 // 1% do elemento precisa estar visível para iniciar a animação
};

// Cria o IntersectionObserver
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observa todos os elementos com as classes 'card', 'banner-texto', 'ccard', 'info' e 'testimonial'
document.querySelectorAll('.card, .banner-texto, .ccard, .info, .testimonial').forEach(element => {
    observer.observe(element); // Começa a observar o elemento
});
