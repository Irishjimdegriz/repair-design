  const swiperLabels = ['Выезд на замер <br>помещения', 'Составление<br> сметы', 'Разработка<br>  дизайн проекта', 'Закупка расходных<br> материалов', 'Ремонтно-отделочные<br> работы', 'Приемка-сдача <br>работ'];


$(document).ready(function () {
  const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        modalDialog = $('.modal__dialog'),
        scrollUp = $('.scroll-up-container'),
        policyCheck = $('.policy__checkbox'), 
        policyLabel = $('.policy__label'),
        labels = $('.label');

  const switchModal = () => {
    modal.toggleClass('modal--visible');
  }

  modalBtn.on('click', switchModal);
  closeBtn.on('click', switchModal);

  $(document).on('keydown', function(e) {
    if (e.code === "Escape") {
      switchModal();
    }
  }); 

  $(document).on('click', function(event) {
    let target = $(event.target);

    if (target.is(policyCheck) || target.is(policyLabel)) {
      policyCheck.prop("checked", !policyCheck.prop("checked"));
    }
    else if (!target.is(modalBtn) && modal.hasClass('modal--visible') && !target.closest(modalDialog).length && !target.is(labels)){
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

    new WOW().init();
    // var $animation_elements = $('.animate');
    // var $window = $(window);
    
    // function check_if_in_view() {
    //   var window_height = $window.height();
    //   var window_top_position = $window.scrollTop();
    //   var window_bottom_position = (window_top_position + window_height);
     
    //   $.each($animation_elements, function() {
    //     var $element = $(this);
    //     var element_height = $element.outerHeight();
    //     var element_top_position = $element.offset().top;
    //     var element_bottom_position = (element_top_position + element_height);
     
    //     //check to see if this current container is within viewport
    //     if ((element_bottom_position >= window_top_position) &&
    //         (element_top_position <= window_bottom_position)) {
    //       $element.addClass('slidein');
    //     } else {
    //       $element.removeClass('slidein');
    //     }
    //   });
    // }
    
    // $window.on('scroll resize', check_if_in_view);
    // $window.trigger('scroll');

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
        }
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
        }
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
        }
      }
    });

    $('[type=tel]').mask('+7(000) 000-00-00');

    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [55.751574, 37.573856],
              zoom: 9
          }, {
              autoFitToViewport: 'always',
              searchControlProvider: 'yandex#search'
          }),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: '../img/marker.svg',
              // Размеры метки.
              iconImageSize: [30, 42],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });
          
          if (window.outerWidth > 1080) {
            myMap.container.getElement().style.height = '465px';
          }
          else {
            myMap.container.getElement().style.height = '255px';
          }

          // Инициируем пересчет размеров.
          myMap.container.fitToViewport();

          myMap.container.events.add('sizechange', () => {
            if (window.outerWidth > 1080)
              myMap.container.getElement().style.height = '465px';
            else
              myMap.container.getElement().style.height = '255px';
          });

          myMap.geoObjects
              .add(myPlacemark);
  });
});


