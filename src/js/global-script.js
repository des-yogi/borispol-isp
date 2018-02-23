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

  $(".faq__accordion").accordionjs({

    // The section open on first init.
    activeIndex : false,

    // Closeable section.
    closeAble: true,

    // Close other sections.
    closeOther: true,

    // the speed of slide animation.
    slideSpeed: 200

  });

});

(function(){
  // Анимация панели телефонов
  var phoneClickPlace = document.querySelector('.user-nav__phone-list');
  var screenWidth = document.documentElement.clientWidth;
  // var otherPlace = document.querySelectorAll('body');

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

  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('user-nav__text--sale')) {
      return;
    }

    if ( phoneClickPlace.classList.contains('user-nav__phone-list--open') ) {
      phoneClickPlace.classList.add('user-nav__phone-list--close');
      phoneClickPlace.classList.remove('user-nav__phone-list--open');
    }
      //alert('not Here');
  });


}());

(function(){

  var screenWidth = document.documentElement.clientWidth;
  // var mainNav = document.getElementById('main-nav');
  // Открытие подменю
  var menu = document.querySelector('.main-nav__list');
  var menuLvlTwo = document.querySelector('.main-nav__sublist-wrapper--lvl-2');
  // var menuLinks = document.querySelectorAll('.main-nav__link');

  menu.addEventListener('click', function(e) {
    var clickedElem = e.target;
    // e.preventDefault();
    // e.target.classList.add('active');

    if (clickedElem.nextElementSibling.classList.contains('main-nav__sublist-wrapper--lvl-2') ) {
      // clickedElem.nextElementSibling.style.display = 'block';
      clickedElem.nextElementSibling.classList.toggle('main-nav__sublist-wrapper--open');

      setTimeout(function () {
        clickedElem.nextElementSibling.classList.remove('main-nav__sublist-wrapper--open');
      }, 3000);
    }


  });


    // debugger

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
