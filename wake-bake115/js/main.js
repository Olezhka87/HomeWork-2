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


// //////  tab 

const tabControls = document.querySelector('.tab__control')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tab__control-link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab__control-link--active')) return

    console.log('работает')

    const tabContentID = tabControl.getAttribute('href')

    const tabContentShow = document.querySelector('.tab__content--show')
    const tabControlActive = document.querySelector('.tab__control-link--active')
    const tabContentRemove = document.querySelector(tabContentID)

    if (tabContentShow) {
        tabContentShow.classList.remove('tab__content--show')
    }

    if (tabControlActive) {
        tabControlActive.classList.remove('tab__control-link--active')
    }


    tabContentRemove.classList.add('tab__content--show')
    tabControl.classList.add('tab__control-link--active')
}

// аккордеон


const accordionLists = document.querySelectorAll('.accordion__list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenItem = accordionList.querySelector('.accordion__list-item--open')
        const accordionOpenedContent = accordionList.querySelector('.accordion__list-item--open .accordion__list-button')   

        const accordionControl = e.target.closest('.accordion__list-button');
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

       if (accordionOpenItem && accordionOpenItem !== accordionItem) {
        accordionOpenItem.classList.remove('accordion__list-item--open');
        const openedContent = accordionOpenItem.querySelector('.accordion__list-button').nextElementSibling;
        openedContent.style.maxHeight = null;
    }

        accordionItem.classList.toggle('accordion__list-item--open');

        if (accordionItem.classList.contains('accordion__list-item--open')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }


    });

})
