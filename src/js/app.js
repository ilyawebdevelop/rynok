import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";


import AirDatepicker from 'air-datepicker';
import "./../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

let formCalendarArray = document.querySelectorAll('.formDate');
formCalendarArray.forEach(el => {
  new AirDatepicker(el, {
    range: true,
    multipleDatesSeparator: ' - ',
    autoClose: true,
    // position: "top left",
  })
});

(function ($) {
  $(window).on("load", function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
      offset: 150,
      scrollSpeed: 50,
    });
  });
})(jQuery);


// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

const mediaQueryMin768 = window.matchMedia('(min-width: 768px)');

if (mediaQueryMin768.matches) {
  // Инициализация слайдера newsSlider
  const newsSlider = document.querySelector('.newsSlider');
  var mySwiperNews = new Swiper(newsSlider, {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: newsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: newsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },

  });
}

// Инициализация слайдера catsSlider
document.querySelectorAll('.catsSlider').forEach(n => {
  const catsSlider = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера catsSlider-sm-2
document.querySelectorAll('.catsSlider-sm-2').forEach(n => {
  const catsSlider = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n.querySelector('.navArrowPrev'),
      nextEl: n.querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера aboutGalSlider
const aboutGalSlider = document.querySelector('.aboutGalSlider');
var mySwiperAboutGal = new Swiper(aboutGalSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  pagination: {
    el: document.querySelector('.aboutGalSlider .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
  fadeEffect: {
    crossFade: true
  },
});

// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 1500,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 8000,
  },
  loop: true,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: document.querySelector('.intro .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

// Инициализация слайдера galSlider
document.querySelectorAll('.galSlider').forEach(n => {
  const galSlider = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n.closest('.galSliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.galSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        spaceBetween: 18,
      },
      576: {
        spaceBetween: 24,
      },
    },
  });
});

// Инициализация слайдера gal-three-slider
document.querySelectorAll('.gal-three-slider').forEach(n => {
  const galThreeSlider = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 19,
    speed: 600,
    navigation: {
      prevEl: n.closest('.gal-three-slider-wrapper').querySelector('.navArrowPrev'),
      nextEl: n.closest('.gal-three-slider-wrapper').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.headerBFixed');
  // const mainEl = document.querySelector('.main');

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = 1000;

    if (scrollTop >= heroCenter) {
      header.classList.add('active')
      // mainEl.style.marginTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove('active')
      // mainEl.style.marginTop = `0px`;
    }
  };

  headerFixed();

  window.addEventListener('scroll', () => {
    headerFixed();
  });
});

// Burger
const btnMenu = document.querySelector('#toggle');
const searchMenuBtnAll = document.querySelectorAll('.searchMobileAction');
const menu = document.querySelector('.headerNavMobile');
const searchMenu = document.querySelector('.headerSearchMobile');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavMobileClose');
const searchClose = document.querySelector('.headerSearchMobileClose');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});

searchMenuBtnAll.forEach(el => {
  el.addEventListener('click', () => {
    searchMenu.classList.add('active');
  });
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

searchClose?.addEventListener('click', function (e) {
  searchMenu.classList.remove('active');
});

$('.freeshopFilterAction').click(function () {
  $(this).toggleClass('active');
  $(this).parent('.freeshop-filter-action-sm').siblings('.freeshop-filter').slideToggle();
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('.formInput--password');
togglePassword?.addEventListener('click', () => {
  // Toggle the type attribute using
  // getAttribure() method
  const type = password.getAttribute('type') === 'password' ?
    'text' : 'password';
  password.setAttribute('type', type);
});

let inputAdd = document.querySelectorAll('.inputAdd');
inputAdd.forEach(el => {
  el.addEventListener('click', () => {
    const container = el.closest('.inputAddWrap');
    // 1. Создаем новый div
    const newDiv = document.createElement('div');
    newDiv.classList.add('inputW'); // Добавляем класс
    newDiv.classList.add('mb-0'); // Добавляем класс
    // 2. Создаем input
    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.placeholder = 'Число';
    newInput.classList.add('formInput');
    newInput.classList.add('formInput--lg-h-56');
    newInput.classList.add('max-w-160');
    // 3. Помещаем input внутрь div
    newDiv.appendChild(newInput);
    // 4. Помещаем готовый div на страницу
    container.appendChild(newDiv);
  });
});


let inputImageArray = document.querySelectorAll('.photo-item-input');

inputImageArray.forEach(el => {
  let image = el.closest('.photo-item');
  let removeImageBtn = el.closest('.photo-item').querySelector('.photo-item-remove-image');
  el?.addEventListener('change', () => {
    uploadFile(el.files[0], el, image);
  });
  removeImageBtn?.addEventListener('click', () => {
    image.style.backgroundImage = "none";
    image.classList.remove('completed');
  });
});

function uploadFile(file, formImage, formUrlImage) {
  //проверяем тип файла
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('Разрешены только изображения');
    formImage.value = '';
    return;
  }
  formImage.value = '';

  if (file.size > 1 * 1024 * 1024) {
    alert('Файл должен быть менее 1 МБ.');
    return;
  }

  var reader = new FileReader();
  reader.onload = function (e) {
    console.log('Отправка');
    formUrlImage.style.backgroundImage = `url('${e.target.result}')`;
    formUrlImage.classList.add('completed');
  };
  reader.onerror = function (e) {
    alert('Ошибка');
    formUrlImage.style.display = 'none';
  };
  reader.readAsDataURL(file);
}