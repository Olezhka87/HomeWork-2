const modal = document.querySelector('.modal')
const btnOpen = document.querySelector('.openmodal')
const btnClose = document.querySelector('.close')

btnOpen.addEventListener('click', () => {
    modal.classList.add('open__modal')
});

modal.addEventListener('click', event => {
    const target = event.target // сокращаем код
    if (target && target.classList.contains('modal') || event.target.classList.contains('close')) {  // сейчас я сюда навешу target - вместо event.target, 
                                                                                                    // чтобы код был меньше
        modal.classList.remove('open__modal')
    }
})


document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('open__modal')) {
        modal.classList.toggle('open__modal') // не стал объявлять переменную для сокращения кода, т.к remove используется 1 раз, а здесь же toggle :) 
        // Понял, что, если часто используется одно событие, то можно через const объявить переменную 
        //   и сократить при этом код
        console.log(event.code)   // проверка key-log через event
    }
})

/// Вариант полного кода для работы "X" в модальном окне, 
// но можно сделать это в условиях функции через || "и" с кодом, который выполняет тоже самое действие(результат)

// btnClose.addEventListener('click', () => {
//     modal.classList.remove('open__modal')
// })