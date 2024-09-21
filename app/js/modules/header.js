const header = () => {
    const burger = document.getElementById('headerBurger');
    const headerParent = document.querySelector('.header');
    const headerMenu = document.querySelector('.header__menu');
    const body = document.querySelector('body');

    const elements = [headerParent, headerMenu, body, burger];

    const handlerBurger = () => {
        console.log('click')
        elements.forEach(el=> {
            el.classList.toggle('is-open-menu');
        });
    }

    burger.addEventListener("click", ()=> handlerBurger());
}
export default header;