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
    let mySwiper = new Swiper ('.swiper-container', {
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
});