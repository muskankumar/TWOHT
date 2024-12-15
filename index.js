const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.querySelector('.spotlight-carousel');
const cards = document.querySelectorAll('.spotlight-book');

let trans_x = 0;
const cardWidth = cards[0].clientWidth + 20; // Adding 20px gap between cards
const maxTransX = -(cardWidth * (cards.length - 1));

prevBtn.addEventListener('click', () => {
  if (trans_x < 0) {
  trans_x += cardWidth;
  carousel.style.transform = `translateX(${trans_x}px)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (trans_x > maxTransX) {
  trans_x -= cardWidth;
  carousel.style.transform = `translateX(${trans_x}px)`;
  }
});

// let autoScrollInterval;

// const autoScroll = () => {
//   if (trans_x > maxTransX) {
//     trans_x -= cardWidth;
//   } else {
//     trans_x = 0;
//   }
//   carousel.style.transform = `translateX(${trans_x}px)`;
// };

// autoScrollInterval = setInterval(autoScroll, 3000);

// carousel.addEventListener('mouseover', () => {
//   clearInterval(autoScrollInterval);
// });

// carousel.addEventListener('mouseout', () => {
//   autoScrollInterval = setInterval(autoScroll, 3000);
// });