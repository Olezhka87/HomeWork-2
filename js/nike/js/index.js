import HeaderFixed from './header.js';
import { initBurger } from './burger.js';
import { modalInit } from './modal.js';
import { productSlider } from './product-slider.js';
import { initButtonSize } from './sizes.js';

try {
	const headerFixed = new HeaderFixed({
		HEADER: 'header',
		HEADER_FIXED: 'header--fixed',
	});



} catch (error) {
	console.error(error);
}

initBurger();
modalInit();
productSlider();
initButtonSize();

