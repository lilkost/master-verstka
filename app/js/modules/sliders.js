const slidersCreate = () => {
    if(document.querySelector('.slider-big')) {
        const swiper = new Swiper('.slider-big', {
            // Optional parameters
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 10,
            // If we need pagination
            pagination: {
                el: '.slider-big-pagination',
                clickable: true
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000, 
        });
    }

    if(document.querySelector('.masters-slider')) {
        const swiper = new Swiper('.masters-slider', {
            direction: 'horizontal',
            slidesPerView: 4,
            spaceBetween: 40,
            allowTouchMove: false,
            // And if we need scrollbar
            scrollbar: {
                el: '.masters-slider-scrollbar',
                clickable: true,
                draggable: true, 
            },
            // mousewheel: true,
        });
    }

    if(document.querySelector('.masters-slider-min')) {
        const sliderMin = document.querySelectorAll('.masters-slider-min');

        sliderMin.forEach((slider, key)=> {
            const swiper = new Swiper(slider, {
                // Optional parameters
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 10,
                // If we need pagination
                pagination: {
                    el: slider.querySelector('.masters-slider-min-pagination'),
                    clickable: true,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 800, 
            });
        })
    }

    if(document.querySelector('.works-slider-min')) {
        const sliderMin = document.querySelectorAll('.works-slider-min');

        sliderMin.forEach(slider=> {
            const swiper = new Swiper(slider, {
                // Optional parameters
                direction: 'horizontal',
                slidesPerView: 1,
                // If we need pagination
                pagination: {
                    el: slider.querySelector('.works-slider-min-pagination'),
                    clickable: true
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 800, 
            });
        })
    }
}

export default slidersCreate