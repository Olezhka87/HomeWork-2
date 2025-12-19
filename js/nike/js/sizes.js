export const sizeButtonList = document.querySelector('.product__sizes-list');
export const sizeButton = document.querySelectorAll('.product__sizes-button')

export function initButtonSize() { 
	
	const savedSize = localStorage.getItem('selectedSize');
	if (savedSize) {
		sizeButton.forEach((button) => {
			if (button.textContent.trim() === savedSize.trim()) {
				button.classList.add('product__sizes-button--active')
			}
		})
	} 
	
	sizeButtonList.addEventListener('click', (event) => {


	const clickButton = event.target.closest('.product__sizes-button')

	if (clickButton) {
		sizeButton.forEach((button) => {
			button.classList.remove('product__sizes-button--active');
		})
		const size = clickButton.textContent;
		localStorage.setItem('selectedSize', size)
		clickButton.classList.add('product__sizes-button--active')
	}
})};


