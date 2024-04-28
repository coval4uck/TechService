
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
let btnBurger = document.querySelector('.btn-burger');


btnBurger.addEventListener('click',(e) => {
    menu.classList.toggle('header__menu-active');
    btnBurger.classList.toggle('btn-burger__close');
    body.classList.toggle('lock')
})



const slider = document.querySelectorAll('.swiper')


for(let i = 0; i < slider.length; i++){
    new Swiper(slider[i],{
        slidesPerView: 'auto',
        spaceBetween: 18,
    
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints:{
            768:{
                spaceBetween: 38,
            }
        }
    })
}

