const slidersCreate = () => {
    if(document.querySelector('.slider-big')) {
        const swiper = new Swiper('.slider-big', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 10,
            autoHeight: true,
            pagination: {
                el: '.slider-big-pagination',
                clickable: true
            },

            breakpoints: {
                481: {
                    direction: 'vertical',
                },
                280:{
                    direction: 'horizontal',
                }
            }
        });
    }


    if(document.querySelector('.masters-slider')) {
        const masterBigSlider = new Swiper('.masters-slider', {
            direction: 'horizontal',
            slidesPerView: 4,
            spaceBetween: 40,
            allowTouchMove: false,
            autoHeight: true,
            scrollbar: {
                el: '.masters-slider-scrollbar',
                clickable: true,
                draggable: true, 
            },
            navigation: {
                nextEl: '.masters-slider-button-next',
                prevEl: '.masters-slider-button-prev',
            },
            autoplay: {
                delay: 3500, // Устанавливаем autoplay по умолчанию
            },
            breakpoints: {
                1201: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                    autoplay: false, // Отключаем autoplay на больших экранах
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 38,
                    autoplay: false, // Отключаем autoplay на планшетах
                },
                480:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                    autoplay: {
                        delay: 10000,
                        disableOnInteraction: true  // Оставляем autoplay на малых экранах
                    },
                },
                280:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                    autoplay: {
                        delay: 10000,
                        disableOnInteraction: true  // Оставляем autoplay на малых экранах
                    },
                }
            }
        });
        
        const sliderMin = document.querySelectorAll('.masters-slider-min');
        
        sliderMin.forEach((slider, key)=> {
            const pag = `.masters-slider-min-pagination-${key + 1}`;
            const sl = `.masters-slider-min-${key + 1}`
            new Swiper(document.querySelector(sl), {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: document.querySelector(pag),
                    clickable: true,
                },
            });
        })
    }



    if(document.querySelector('.works-slider-min')) {
        const sliderMin = document.querySelectorAll('.works-slider-min');

        sliderMin.forEach((slider, key)=> {
            const pagination = `.works-slider-min-pagination-${key + 1}`;
            const sl = `.works-slider-min-${key + 1}`;
            const swiper = new Swiper(document.querySelector(sl), {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                speed: 600,
                pagination: {
                    el: document.querySelector(pagination),
                    clickable: true
                },
            });
        })
    }
}

export default slidersCreate