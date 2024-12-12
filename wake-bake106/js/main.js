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