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

    if(document.querySelector('.masters-slider-min')) {
        const sliderMin = document.querySelectorAll('.masters-slider-min');

        sliderMin.forEach((slider, key)=> {
            const swiper = new Swiper(slider, {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: slider.querySelector('.masters-slider-min-pagination'),
                    clickable: true,
                },
            });
        })
    }

    if(document.querySelector('.masters-slider')) {
        const swiper = new Swiper('.masters-slider', {
            direction: 'horizontal',
            slidesPerView: 4,
            spaceBetween: 40,
            allowTouchMove: false,
            scrollbar: {
                el: '.masters-slider-scrollbar',
                clickable: true,
                draggable: true, 
            },
            navigation: {
                nextEl: '.masters-slider-button-next',
                prevEl: '.masters-slider-button-prev',
            },
            breakpoints: {
                1201: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 38,
                },
                280:{
                    slidesPerView: 1,
                    spaceBetween: 38,
                }
            }
        });
    }



    if(document.querySelector('.works-slider-min')) {
        const sliderMin = document.querySelectorAll('.works-slider-min');

        sliderMin.forEach(slider=> {
            const swiper = new Swiper(slider, {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                speed: 600,
                pagination: {
                    el: slider.querySelector('.works-slider-min-pagination'),
                    clickable: true
                },
            });
        })
    }
}

export default slidersCreate