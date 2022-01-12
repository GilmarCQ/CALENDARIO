// DOM Elements
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const music = new Audio('../media/efecto.mp3')

// Variables
let paginaActual = 1;
let totalPaginas = 18;

// Functions
const nextPage = () => {
    console.log('Siguiente Pagina');
    if (paginaActual !== totalPaginas) {
        music.volume = 0.8;
        music.play();
        const paginaDomActual = document.querySelector(`#page-0${formatoDosDigitos(paginaActual)}`);
        const paginaDomSiguiente = document.querySelector(`#page-0${formatoDosDigitos(paginaActual + 1)}`);
        if (paginaActual !== 1) {
            const paginaDomAnterior = document.querySelector(`#page-0${formatoDosDigitos(paginaActual-1)}`);
            paginaDomAnterior.classList.remove('flipped');
        }
        paginaDomActual.classList.add('flipped');
        paginaDomActual.style.zIndex = 100;
        paginaDomSiguiente.style.zIndex = 200;
        paginaActual++;
    }
}
const previousPage = () => {
    console.log('Retroceder Pagina');
    if (paginaActual !== 1) {
        const paginaDomActual = document.querySelector(`#page-0${formatoDosDigitos(paginaActual)}`);
        const paginaDomAtras = document.querySelector(`#page-0${formatoDosDigitos(paginaActual - 1)}`);
        if (paginaActual !== totalPaginas) {
            const paginaDomAnterior = document.querySelector(`#page-0${formatoDosDigitos(paginaActual+1)}`);
            paginaDomAnterior.classList.remove('flipped');
        }
        // paginaDomActual.classList.add('flipped');
        paginaDomActual.style.zIndex = 100;
        paginaDomAtras.style.zIndex = 200;
        paginaActual--;
    }
}
const formatoDosDigitos = (numero) => {
    let cadena = numero.toString();
    let totalDigitos = numero.toString().length;
    if (totalDigitos < 2) {
        cadena = '0' + cadena;
    }
    return cadena;
}

// btnPrev.addEventListener('click', previousPage);
// btnNext.addEventListener('click', nextPage);
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        previousPage();
    }
    if (event.keyCode === 39) {
        nextPage();
    }
})

