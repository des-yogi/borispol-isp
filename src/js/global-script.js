$(document).ready(function() {

  $("#hero-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoHeight: true,
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
        margin: 15,
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
        margin: 15,
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

  $("#rates-slider").owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    dots: false,
    autoHeight: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    // nav: false

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

  $('.countdown').downCount({
    date: '12/31/2018 24:00:00', //формат m:d:Y
    offset: +2 // зимнее время +2, летнее +3
  }, function () {
    //alert('Время истекло!');
  });

  $(function() {
    $('#menu-main').metisMenu({
      toggle: false
    });
  });

});

$(document).ready(function() {
  $("#reviews-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 40,
    dots: true,
    nav: true,
    //autoHeight: true,
    responsiveClass: true,
    responsive: {
      0:{
        dots: true,
        nav: false
      },
      768:{
        dots: true,
        nav: false
      },
      1200:{
        dots: false,
        nav: true
      }
    }
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true

  });
});

(function(){
  // Анимация панели телефонов
  var phoneClickPlace = document.querySelector('.user-nav__phone-list');
  var supportPhone = document.querySelector('.user-nav__tel-link--support');
  var supportPhoneList = document.querySelector('.user-nav__phone-list--support');
  // var otherPlace = document.querySelectorAll('body');
  var isMobile = window.isMobile.any;

  if (phoneClickPlace && isMobile) {

    phoneClickPlace.addEventListener('click', function (e) {
      if ( !phoneClickPlace.classList.contains('user-nav__phone-list--open') ) {
        phoneClickPlace.classList.add('user-nav__phone-list--open');
        phoneClickPlace.classList.remove('user-nav__phone-list--close');
      } else {
          phoneClickPlace.classList.add('user-nav__phone-list--close');
          phoneClickPlace.classList.remove('user-nav__phone-list--open');
        }
    });

  } else {
    // is-desktop detected
    phoneClickPlace.addEventListener('mouseover', function (e) {
      if ( !phoneClickPlace.classList.contains('user-nav__phone-list--open') ) {
        phoneClickPlace.classList.add('user-nav__phone-list--open');
        phoneClickPlace.classList.remove('user-nav__phone-list--close');
      }
    });

    phoneClickPlace.addEventListener('mouseout', function (e) {
      if ( phoneClickPlace.classList.contains('user-nav__phone-list--open') ) {
        phoneClickPlace.classList.remove('user-nav__phone-list--open');
        phoneClickPlace.classList.add('user-nav__phone-list--close');
      }
    });
  }

  if (supportPhone && !isMobile) {
    supportPhone.addEventListener('mouseover', function () {
      supportPhoneList.classList.add('user-nav__phone-list--support-hovered');
    });
    supportPhone.addEventListener('mouseout', function () {
      supportPhoneList.classList.remove('user-nav__phone-list--support-hovered');
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
  });

}());

/*(function(){

  var screenWidth = document.documentElement.clientWidth;
  // var mainNav = document.getElementById('main-nav');
  // Открытие подменю
  var menu = document.querySelector('.main-nav__list');
  var menuLvlTwo = document.querySelector('.main-nav__sublist-wrapper--lvl-2');

  if (menu) {

    menu.addEventListener('click', function(e) {
      var clickedElem = e.target;
      if (clickedElem.nextElementSibling && clickedElem.nextElementSibling.classList.contains('main-nav__sublist-wrapper--lvl-2') ) {
        // clickedElem.nextElementSibling.style.display = 'block';
        clickedElem.nextElementSibling.classList.toggle('main-nav__sublist-wrapper--open');
      }
    });

    menu.addEventListener('mouseover', function(e) {
      var hoverElem = e.target;
      if (hoverElem.nextElementSibling && hoverElem.nextElementSibling.classList.contains('main-nav__sublist-wrapper--lvl-2') ) {
        // clickedElem.nextElementSibling.style.display = 'block';
        hoverElem.nextElementSibling.classList.add('main-nav__sublist-wrapper--open');

        setTimeout(function () {
          hoverElem.nextElementSibling.classList.remove('main-nav__sublist-wrapper--open');
        }, 3000);
      }
    });
  }


}());*/

(function(){
  // modal, выбор тарифа и отправка формы

  var ratesSlider = document.querySelector('#rates-slider');
  var modalConnect = document.querySelector('#connect');
  var currentChoise;

  if (ratesSlider) {

    var hiddenField = modalConnect.querySelector('input[type=hidden]');
    var btnArr = ratesSlider.querySelectorAll('button');

    ratesSlider.addEventListener('click', function (e) {
      currentChoise = e.target.value;

      if (!hiddenField) {
        return;
      } else {
          hiddenField.value = currentChoise;
      }
    });

  }


}());

(function(){
  //Блок - Заявка на подключение
  // var btnBlock = document.querySelector('.request__select-props');
  var privatBtn = document.querySelector('label[for="privat"]');
  var multistoryBtn = document.querySelector('label[for="apartment"]');
  var officeBtn = document.querySelector('label[for="office"]');

  // var selectBlock = document.querySelector('.request__select-rate');
  var privatSelect = document.querySelector('#rate-privat');
  var multistorySelect = document.querySelector('#rate-multistory');
  var officeSelect = document.querySelector('#rate-office');

  if (privatBtn) {
    privatBtn.addEventListener('click', function(e) {
      if (privatSelect.classList.contains('hidden')) {
        privatSelect.children["0"].selected = true;
        privatSelect.classList.remove('hidden');
        multistorySelect.classList.add('hidden');
        officeSelect.classList.add('hidden');
      }
    });
  }


  if (multistoryBtn) {
    multistoryBtn.addEventListener('click', function(e) {
      if (multistorySelect.classList.contains('hidden')) {
        multistorySelect.children["0"].selected = true;
        multistorySelect.classList.remove('hidden');
        privatSelect.classList.add('hidden');
        officeSelect.classList.add('hidden');
      }
    });
  }


  if (officeBtn) {
    officeBtn.addEventListener('click', function(e) {
      if (officeSelect.classList.contains('hidden')) {
        officeSelect.children["0"].selected = true;
        officeSelect.classList.remove('hidden');
        privatSelect.classList.add('hidden');
        multistorySelect.classList.add('hidden');
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

(function(){
  var isMobile = window.isMobile;
  if (isMobile.any) {
    console.log('Это мобильный!');
  } else {
      console.log('Это десктоп!');
  }

}());

(function(){

  // Добавление/удаление модификаторов при клике на переключение видимости
  var toggler = document.getElementById('main-nav-toggler');

  if(toggler){
    toggler.addEventListener('click', mainNavToggle);

    function mainNavToggle(e) {
      //e.preventDefault();
      toggler.classList.toggle('burger--close'); // модификатор иконки (должен быть .burger)
      //document.querySelector('.topbar-nav').classList.toggle('topbar-nav--open');
      var nav = $('.topbar-nav');
      var animateTime = 500;
      if(nav.height() === 0){
      autoHeightAnimate(nav, animateTime);
      } else {
        nav.stop().animate({ height: '0' }, animateTime);
      }
    }
  }

  function autoHeightAnimate(element, time){
    var curHeight = element.height(), // Get Default Height
    autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
  }

}());

