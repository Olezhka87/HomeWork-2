export const burger = document.querySelector('.burger');
export const burgerMenu = document.querySelector('.header__menu');
export const pageBody = document.querySelector('.page__body');

export function initBurger() {
	burger.addEventListener('click', () => {
		burgerMenu.classList.toggle('header__menu--open');
		pageBody.classList.toggle('page__body--no-scroll');
		burger.classList.toggle('burger--open');
});

	document.addEventListener('click', (event) => {
		if(burgerMenu.classList.contains('header__menu--open') 
			&& (!event.target.closest('.header__menu')) 
			&& (!event.target.closest('.burger')))
			
			{

			burgerMenu.classList.remove('header__menu--open');
			pageBody.classList.remove('page__body--no-scroll');
			burger.classList.remove('burger--open');

		}
		
	})
};



