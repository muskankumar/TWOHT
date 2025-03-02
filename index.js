const scrollContainer = document.getElementById('spotlight-carousel-scrollbox');

// 150px width + 10px margin on each side
const elementWidth = document.querySelector('.spotlight-book').offsetWidth; 

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    if (evt.deltaY > 0) {
        scrollContainer.scrollLeft += elementWidth;
    } else {
        scrollContainer.scrollLeft -= elementWidth;
    }

});

const authorsScrollContainer = document.getElementById('authors-carousel-scrollbox');

// 150px width + 10px margin on each side
const authorElementWidth = document.querySelector('.author-card-container').offsetWidth; 

authorsScrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    if (evt.deltaY > 0) {
        authorsScrollContainer.scrollLeft += authorElementWidth;
    } else {
        authorsScrollContainer.scrollLeft -= authorElementWidth;
    }
});