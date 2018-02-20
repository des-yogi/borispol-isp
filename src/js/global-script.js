// Если на проекте jQuery
/*$( document ).ready(function() {
 code
});*/

$(document).ready(function(){

  $("#hero-slider").owlCarousel({
    items: 1,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    responsive:{
        0:{
          nav: false
        },
        768:{
          nav: false
        },
        1200:{
          nav: true
        }
    }
  });

  $("#actions-slider").owlCarousel({
    items: 1,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    responsive:{
      0:{
        nav: false
      },
      768:{
        items: 2,
        margin: 30,
        nav: false
      },
      1200:{
        items: 3,
        margin: 30,
        nav: false
      }
    }
  });

  $("#news-slider").owlCarousel({
    items: 1,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    responsive:{
      0:{
        nav: false
      },
      768:{
        items: 2,
        margin: 30,
        nav: false
      },
      1200:{
        items: 4,
        margin: 30,
        nav: false
      }
    }
  });

});

(function(){
  // Анимация панели телефонов
  var phoneClickPlace = document.querySelector('.user-nav__phone-list');
  var screenWidth = document.documentElement.clientWidth;

  if (phoneClickPlace) {
    phoneClickPlace.addEventListener('click', function (e) {
      if ( !phoneClickPlace.classList.contains('user-nav__phone-list--open') ) {
        phoneClickPlace.classList.add('user-nav__phone-list--open');
        phoneClickPlace.classList.remove('user-nav__phone-list--close');
      } else {
          phoneClickPlace.classList.add('user-nav__phone-list--close');
          phoneClickPlace.classList.remove('user-nav__phone-list--open');
      }
    });
  }

}());

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
