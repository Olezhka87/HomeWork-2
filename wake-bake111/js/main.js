(function () {

    document.addEventListener('click', burgerHandler);

    function burgerHandler(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerMenuLink = e.target.closest('.header__item-link')

        if (!burgerIcon && !burgerMenuLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        }
        else {
            document.body.classList.remove('body--open-menu')
        }
    }

})()

// модальное окно

const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.about__img-button');
const btnClose = document.querySelector('.modal__img-close')


btnOpen.addEventListener('click', () => {
    document.body.classList.add('body__modal-open');
});

btnClose.addEventListener('click', (event) => {
    document.body.classList.remove('body__modal-open');
})

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && document.body.classList.contains('body__modal-open')) {
        document.body.classList.remove('body__modal-open')
        console.log(event.code)   
    }
})

modal.addEventListener('click', event => {
    if (event.target === modal) {
        document.body.classList.remove('body__modal-open'); 
    }
});