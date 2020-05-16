  labels = ['Выезд на замер <br>помещения', 'Составление<br> сметы', 'Разработка<br>  дизайн проекта', 'Закупка расходных<br> материалов', 'Ремонтно-отделочные<br> работы', 'Приемка-сдача <br>работ'];


$(document).ready(function () {
  const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        modalDialog = $('.modal__dialog'),
        scrollUp = $('.scroll-up-container');

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

    if (!target.is(modalBtn) && modal.hasClass('modal--visible') && !target.closest(modalDialog).length){
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
          return `<div class="${className} swiper-custom-bullet"><p class="slide-number">0${index + 1}</p><br><div class="bullet-text">${(labels[index])}</div></div>`;
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
});