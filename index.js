
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

(function () {
  var circularCarousal = {
    init: function () {
      _this = this;
      
      _this.carousel = document.querySelector('.spotlight-carousel');
      _this.prevBtn = document.getElementById('prevBtn');
      _this.nextBtn = document.getElementById('nextBtn');

      _this.trans_x = 0;

      const cards = document.querySelectorAll('.spotlight-book');
      _this.cardWidth = cards[0].clientWidth + 10; // Adding 10px gap between cards
      _this.maxTransX = -(_this.cardWidth * (cards.length - 1));

      _this.prevBtn.addEventListener("click", () => _this.prevbook());
      _this.nextBtn.addEventListener("click", () => _this.nextbook());
    },
    prevbook: function () {
      if (_this.trans_x < 0) {
        _this.trans_x += _this.cardWidth;
        _this.carousel.style.transform = `translateX(${_this.trans_x}px)`;
      }
    },
    nextbook: function () {
      if (_this.trans_x > _this.maxTransX) {
        _this.trans_x -= _this.cardWidth;
        _this.carousel.style.transform = `translateX(${_this.trans_x}px)`;
      }
    }
  };
  circularCarousal.init();
})();