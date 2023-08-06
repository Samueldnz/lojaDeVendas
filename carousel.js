// Ativar o carrossel de promoções
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach(item => {
        item.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

// Iniciar o carrossel automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);




