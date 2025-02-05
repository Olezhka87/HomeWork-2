
// accordion

$("#my-accordion").accordionjs({
    closeAble: true,
    closeOther: true,
    slideSpeed: 200,
    activeIndex: 1,
    openSection: function (section) { },
    beforeOpenSection: function (section) { },
});

// slider job

swiper = new Swiper('.main__job-swiper', {
 
    spaceBetween: 32,
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// slider vacancy

swiper = new Swiper('.main__vacancy-swiper', {
    spaceBetween: 32,
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// window text show-job

document.querySelectorAll('.main__job-link').forEach(button => {
    button.addEventListener('click', function () {
        const collapsedText = this.previousElementSibling.querySelector('.main__job-collapsedtext');
        const fullText = this.previousElementSibling.querySelector('.main__job-cardtext');


        if (fullText.style.display === 'none' || fullText.style.display === '') {
            fullText.style.display = 'inline';
            collapsedText.style.display = 'none';
        } else {
            fullText.style.display = 'none';
            collapsedText.style.display = 'inline';
        }
    });
});

// window text show-vacancy

document.querySelectorAll('.main__vacancy-link').forEach(button => {
    button.addEventListener('click', function () {
        const collapsedText = this.previousElementSibling.querySelector('.main__vacancy-collapsedtext');
        const fullText = this.previousElementSibling.querySelector('.main__vacancy-cardtext');


        if (fullText.style.display === 'none' || fullText.style.display === '') {
            fullText.style.display = 'inline';
            collapsedText.style.display = 'inline';
        } else {
            fullText.style.display = 'none';
            collapsedText.style.display = 'inline';
        }
    });
});


// ////// Back-To-Top :) scroll

const showOnPx = 150;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("back-to-top-hidden")
    } else {
        backToTopButton.classList.add("back-to-top-hidden")
    }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};

backToTopButton.addEventListener("click", goToTop)


// Modal Window

const modal = document.querySelector('.modal');
const btnOpen = document.querySelectorAll('.button');
const btnClose = document.querySelectorAll('.modal__img-close');

btnOpen.forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.add('body__modal-open');
    });
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && document.body.classList.contains('body__modal-open')) {
        document.body.classList.remove('body__modal-open');
    }
});

modal.addEventListener('click', event => {
    if (event.target === modal) {
        document.body.classList.remove('body__modal-open');
    }
});

btnClose.forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.remove('body__modal-open');
    });
});


// date modal

$(function(){
    $("#datepicker").datetimepicker();
});

$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$.timepicker.regional['ru'] = {
	timeOnlyTitle: 'Выберите время',
	timeText: 'Время',
	hourText: 'Часы',
	minuteText: 'Минуты',
	secondText: 'Секунды',
	millisecText: 'Миллисекунды',
	timezoneText: 'Часовой пояс',
	currentText: 'Сейчас',
	closeText: 'Закрыть',
	timeFormat: 'HH:mm',
	amNames: ['AM', 'A'],
	pmNames: ['PM', 'P'],
	isRTL: false
};

$.timepicker.setDefaults($.timepicker.regional['ru']);


// tel-mask

let inputs = document.querySelector('input[type="tel"]');
let im = new Inputmask('+7(999)999-99-99');
im.mask(inputs);


// scroll center header

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 20, 
            behavior: 'smooth'
        });
    });
});


// top close phone & animation

document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector('.header__top-close-hiden');
    const headerTop = document.querySelector('.header__innner-top');

    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        headerTop.style.opacity = 0; 
        headerTop.style.visibility = 'hidden'; 
    });
});

