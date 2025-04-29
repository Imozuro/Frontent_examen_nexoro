let slideIndex = 1;
showSlides(slideIndex);

// Функция для переключения слайдов
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    // Цикличность
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Сдвиг слайдов
    let slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
}



