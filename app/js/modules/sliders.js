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
            breakpoints: {
                1201: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                    autoplay:false,
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 38,
                    autoplay:false,
                },
                280:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                    autoplay: {
                        delay: 3500,
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



        // masterBigSlider.on('slideChange', function () {
        //     if(window.innerWidth <= 960) {
        //         const activeIndex = masterBigSlider.activeIndex;
        //     const slides = masterBigSlider.slides;
        //     // Получаем индекс следующего и предыдущего слайда
        //     const prevIndex = activeIndex - 1;
        //     const nextIndex = activeIndex + 1;

        //     // Проверяем наличие предыдущего слайда
        //     if (prevIndex >= 0) {
        //         const prevSlide = slides[prevIndex];
        //         console.log('Предыдущий слайд:', prevSlide);
        //         console.log(prevSlide.querySelector('.masters-slider-min'))
        //         const sl = prevSlide.querySelector('.masters-slider-min');
        //         sl.swiper.destroy(true, true);
        //         new Swiper(sl, {
        //             direction: 'horizontal',
        //             slidesPerView: 1,
        //             spaceBetween: 10,
        //             pagination: {
        //                 el: prevSlide.querySelector('.masters-slider-min-pagination'),
        //                 clickable: true,
        //             },
        //         });
        //     } else {
        //         console.log('Предыдущего слайда нет.');
        //     }

        //     // Проверяем наличие следующего слайда
        //     if (nextIndex < slides.length) {
        //         const nextSlide = slides[nextIndex];
        //         console.log('Следующий слайд:', nextSlide);
        //         const sl = nextSlide.querySelector('.masters-slider-min');
        //         sl.swiper.destroy(true, true);
        //         new Swiper(sl, {
        //             direction: 'horizontal',
        //             slidesPerView: 1,
        //             spaceBetween: 10,
        //             pagination: {
        //                 el: nextSlide.querySelector('.masters-slider-min-pagination'),
        //                 clickable: true,
        //             },
        //         });
        //     } else {
        //         console.log('Следующего слайда нет.');
        //     }
        //     }
        // });
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