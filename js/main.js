const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('#modal_close')


cardButton.addEventListener('click', function (event) {
    modal.classList.add('is_open');
})
modalClose.addEventListener('click', function () {
    modal.classList.remove('is_open');
})

new WOW().init();