
// espera a pagina carregar 
document.addEventListener('DOMContentLoaded', function () {

    // efeito maquina de escrever
    const titleElement = document.querySelector('#hero-texto');

    // verificação para evitar erro se o elemento não for encontrado
    if (titleElement) {
        const text = titleElement.innerHTML.split('');
        titleElement.innerHTML = '';

        text.forEach((letter, index) => {
            setTimeout(() => {
                titleElement.innerHTML += letter;
            }, 100 * index);
        });
    }

    // --- botao back to top ---
    const backToTopButton = document.querySelector('#back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }

});