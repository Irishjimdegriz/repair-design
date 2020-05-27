const swiperLabels = ['Выезд на замер <br>помещения', 'Составление<br> сметы', 'Разработка<br>  дизайн проекта', 'Закупка расходных<br> материалов', 'Ремонтно-отделочные<br> работы', 'Приемка-сдача <br>работ'];
let activeLink;

$(document).ready(function () {
  const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        modalDialog = $('.modal__dialog'),
        scrollUp = $('.scroll-up-container'),
        labels = $('.label'),
        modalAccept = $('.modal-accept'),
        acceptCloseBtn = $('.modal-accept__close'),
        modalResponse = $('.modal-response'),
        videoPlay = $('.video__play'),
        fantasyLinks = $('.fantasy__link');

  fantasyLinks.on('click', (event) => {
    if (activeLink !== undefined) {
      activeLink.removeClass('fantasy__link--active');
    }
    let target = $(event.target);
    target.addClass('fantasy__link--active');
    activeLink = target;
  });

  const switchModal = () => {
    modal.toggleClass('modal--visible');
    modalResponse.removeClass('modal--visible');
    modalResponse.removeClass('response--visible');
  }

  modalBtn.on('click', switchModal);
  closeBtn.on('click', switchModal);
  acceptCloseBtn.on('click', () => {
    modalAccept.removeClass('modal--visible');
  });

  $(document).on('keydown', function(e) {
    if (e.code === "Escape") {
      switchModal();
    }
  }); 

  $(document).on('click', function(event) {
    let target = $(event.target);

    // if (target.is(policyCheck) || target.is(policyLabel)) {
    //   policyCheck.prop("checked", !policyCheck.prop("checked"));
    // }
    // else 
    if (!target.is(modalBtn) && modal.hasClass('modal--visible') && !target.closest(modalDialog).length && !target.is(labels)){
      switchModal();
    }

  });

    function scrollFunction() {
      let scrollTop = $(window).scrollTop();

      if (scrollTop > 20) {
        scrollUp.css('display', "block");
      } else {
        scrollUp.css('display', "none");
      }
    }
    
    $(window).scroll(scrollFunction);

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

      //initialize swiper when document ready
    let mySwiper = new Swiper ('.swiper-projects', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      swiping: {
        noSwiping: true
      }
    })
  
    let next = $('.swiper-button-next');
    let prev = $('.swiper-button-prev');
    let bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 30);
    bullets.css('left', prev.width() + 20);

    let swiper = new Swiper('.swiper-steps', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-steps-pagination',
        type: 'bullets',
      },
      swiping: {
        noSwiping: true
      },
      breakpoints: {
        1260: {
          spaceBetween: 0
        }
      }
    });

    let nextStep = $('.swiper-steps-button-next');
    let prevStep = $('.swiper-steps-button-prev');
    let bulletsStep = $('.swiper-steps-pagination');

    nextStep.css('left', prevStep.width() + 10 + bulletsStep.width() + 30);
    bulletsStep.css('left', prevStep.width() + 20);

    let swiperStepsRight = new Swiper('.swiper-steps-right', {
      loop: true,
      pagination: {
        el: '.swiper-steps-right-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class="${className} swiper-custom-bullet"><p class="slide-number">0${index + 1}</p><br><div class="bullet-text">${(swiperLabels[index])}</div></div>`;
          //return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      swiping: {
        noSwiping: true
      }
    });

    swiper.on('slideChange', (event) => {
      //if (swiperStepsRight.activeIndex != swiper.activeIndex)
        swiperStepsRight.slideTo(swiper.activeIndex, 200, runCallbacks=false);
    });

    swiperStepsRight.on('slideChange', (event) => {
      //if (swiper.activeIndex != swiperStepsRight.activeIndex)
        swiper.slideTo(swiperStepsRight.activeIndex, 200, runCallbacks=false);
    });

    $('.swiper-steps-right-pagination').width = $('.swiper-steps-right').width;
    $('.swiper-steps-right-pagination').css('left', 0);

    if(window.matchMedia('(max-width: 1270px)').matches){
      swiper.pagination.dynamicBullets = true;
    }

    let swiperFantasy = new Swiper ('.fantasy__swiper', {
      loop: true,
      navigation: {
        nextEl: '.fantasy__swiper-button-next',
        prevEl: '.fantasy__swiper-button-prev',
      },
      swiping: {
        noSwiping: true
      }
    })

    new WOW().init();

    $('.modal__form').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        // simple rule, converted to {required:true}
        userPhone: {
          required: true,
          minlength: 17
        },
        // compound rule
        userEmail: {
          required: true,
          email: true
        },
        modalPolicyCheckbox: {
          required: true
        }
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя слишком короткое",
          maxlength: "Имя слишком длинное"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Телефон слишком короткий"
        },
        userEmail: {
            required: "Заполните поле",
            email: "Введите корректный email"
        },
        modalPolicyCheckbox: {
          required: "Подтвердите согласие с обработкой данных",
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log("Ajax сработал. Ответ сервера: " + response);
            //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            modalAccept.addClass('modal--visible');
            //ym(64345651,'reachGoal','send-button');
            ym(64345651,'reachGoal','request');
            return true;
          }
        });
      }
    });

    $('.control__form').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        // simple rule, converted to {required:true}
        userPhone: {
          required: true,
          minlength: 17
        },
        // compound rule
        userEmail: {
          required: true,
          email: true
        },
        controlPolicyCheckbox: {
          required: true,
        }
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя слишком короткое",
          maxlength: "Имя слишком длинное"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Телефон слишком короткий"
        },
        userEmail: {
            required: "Заполните поле",
            email: "Введите корректный email"
        },
        controlPolicyCheckbox: {
          required: "Подтвердите согласие с обработкой данных",
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log("Ajax сработал. Ответ сервера: " + response);
            //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            //controlform.addClass('modal--invisible');
            //controlResponse.removeClass('modal--invisible');
            //controlTitle.addClass('modal--invisible');
            //controlResponse.addClass('response--visible');
            modalAccept.addClass('modal--visible');
            ym(64345651,'reachGoal','callback');
            return true;
          }
        });
      }
    });

    $('.specialist__form').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        // simple rule, converted to {required:true}
        userPhone: {
          required: true,
          minlength: 17
        },
        // compound rule
        userEmail: {
          required: true,
          email: true
        },
        specialistPolicyCheckbox: {
          required: true
        }
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя слишком короткое",
          maxlength: "Имя слишком длинное"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Телефон слишком короткий"
        },
        userEmail: {
            required: "Заполните поле",
            email: "Введите корректный email"
        },
        specialistPolicyCheckbox: {
          required: "Подтвердите согласие с обработкой данных",
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log("Ajax сработал. Ответ сервера: " + response);
            //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            modalAccept.addClass('modal--visible');
            //ym(64345651,'reachGoal','send-button');
            ym(64345651,'reachGoal','request');
            return true;
          }
        });
      }
    });

    $('.footer__form').validate({
      errorClass: 'invalid',
      errorElement: "div",
      errorPlacement: function(error, element) {
        element.after(error);
      },
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        // simple rule, converted to {required:true}
        userPhone: {
          required: true,
          minlength: 17
        },
        // compound rule
        userEmail: {
          required: true,
          email: true
        },
        footerPolicyCheckbox: {
          required: true,
        }
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя слишком короткое",
          maxlength: "Имя слишком длинное"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Телефон слишком короткий"
        },
        userEmail: {
            required: "Заполните поле",
            email: "Введите корректный email"
        },
        footerPolicyCheckbox: {
          required: "Подтвердите согласие с обработкой данных",
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log("Ajax сработал. Ответ сервера: " + response);
            //alert('Форма отправлена, мы свяжемся с вами через 10 минут');
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            //modalAccept.addClass('modal--visible');
            //footerform.addClass('modal--invisible');
            //footerTitle.addClass('modal--invisible');
            //footerResponse.removeClass('modal--invisible');
            //footerResponse.addClass('response--visible');
            modalAccept.addClass('modal--visible');
            ym(64345651,'reachGoal','callback');
            return true;
          }
        });
      }
    });

    $('[type=tel]').mask('+7(000) 000-00-00');

  //   ymaps.ready(function () {
  //     var myMap = new ymaps.Map('map', {
  //             center: [55.751574, 37.573856],
  //             zoom: 9
  //         }, {
  //             autoFitToViewport: 'always',
  //             searchControlProvider: 'yandex#search'
  //         }),
  
  //         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //             hintContent: 'Собственный значок метки',
  //             balloonContent: 'Это красивая метка'
  //         }, {
  //             // Опции.
  //             // Необходимо указать данный тип макета.
  //             iconLayout: 'default#image',
  //             // Своё изображение иконки метки.
  //             iconImageHref: './img/marker.svg',
  //             // Размеры метки.
  //             iconImageSize: [30, 42],
  //             // Смещение левого верхнего угла иконки относительно
  //             // её "ножки" (точки привязки).
  //             iconImageOffset: [-5, -38]
  //         });
          
  //         if (window.innerWidth > 1080) {
  //           myMap.container.getElement().style.height = '465px';
  //         }
  //         else {
  //           myMap.container.getElement().style.height = '255px';
  //         }

  //         // Инициируем пересчет размеров.
  //         myMap.container.fitToViewport();

  //         myMap.container.events.add('sizechange', () => {
  //           if (window.innerWidth > 1080)
  //             myMap.container.getElement().style.height = '465px';
  //           else
  //             myMap.container.getElement().style.height = '255px';
  //         });

  //         myMap.geoObjects
  //             .add(myPlacemark);

  //         myMap.behaviors.disable('scrollZoom');
  // });

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.footer__api-map').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map", {
    center: [55.730138, 37.594238], // координаты центра на карте
    zoom: 7, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/marker.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
          if (window.innerWidth > 1080) {
            myMapTemp.container.getElement().style.height = '465px';
          }
          else {
            myMapTemp.container.getElement().style.height = '255px';
          }

          // Инициируем пересчет размеров.
          myMapTemp.container.fitToViewport();

          myMapTemp.container.events.add('sizechange', () => {
            if (window.innerWidth > 1080)
              myMapTemp.container.getElement().style.height = '465px';
            else
              myMapTemp.container.getElement().style.height = '255px';
          });


  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.footer__api-map').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=6fdbd675-9305-4e9b-8942-d69cd6eef340&lang=ru_RU", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

  let player;

  videoPlay.on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay
      }
    });

    function videoPlay(event) {
      event.target.playVideo();
    }
});
});
