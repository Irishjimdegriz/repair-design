//прикручено к сайту

document.addEventListener('DOMContentLoaded', function(event) {
const modal = document.querySelector('.modal');
const modalDialog = document.querySelector('.modal__dialog');
const modalBtn = document.querySelectorAll('[data-toggle=modal]');
const closeBtn = document.querySelector('.modal__close');

const switchModal = () => {
  modal.classList.toggle('modal--visible');
}

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  document.addEventListener('keydown', function(e) {
    if (e.code === "Escape") {
      switchModal();
    }
  }); 
  
  document.addEventListener('click', function(event) {
    let fromButton = false;

    modalBtn.forEach(element => {
      if (element.contains(event.target)) {
        fromButton = true;
      }
    });

    if (!fromButton && modal.classList.contains('modal--visible') && !modalDialog.contains(event.target)) {
      switchModal();
    }
  });
});