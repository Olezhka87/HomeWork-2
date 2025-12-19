export const modalOpen = document.querySelector('.modal');

export const modalButton = document.querySelectorAll('.header__order, .product__buy-button, .product__cart-button, .product__sizes-order-link');

export const modalWindow = document.querySelector('.modal__window');

export const modalClose = document.querySelector('.modal__close');


export function modalInit() {
	modalButton.forEach(button => {
	button.addEventListener('click', (event) => {
		event.preventDefault();
		modalOpen.classList.add('modal--open');
		modalWindow.classList.add('modal__window--open');
	})
	})

	modalClose.addEventListener('click', () => {
		modalOpen.classList.remove('modal--open');
			modalWindow.classList.remove('modal__window--open');
		
	})

	modalOpen.addEventListener('click', (event) => {
		if (event.target === modalOpen) {
			modalOpen.classList.remove('modal--open');
			modalWindow.classList.remove('modal__window--open');
		}
	})
}