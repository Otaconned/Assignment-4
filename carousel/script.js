
'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipeLeft);
rightBtn.addEventListener('click', swipeRight);

function swipeLeft(e){
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if(currentIndex === 0){
        nextIndex = CAROUSEL_SIZE - 1;

    }
    else{
        nextIndex = currentIndex - 1;
    }

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');

}

function swipeRight(e){
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if(currentIndex === CAROUSEL_SIZE - 1){
        nextIndex = 0;

    }
    else{
        nextIndex = currentIndex + 1;
    }

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}

navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        const currentCarouselItem = document.querySelector('.carousel-item.active');
	const currentNavItem = document.querySelector('.nav-item.active');

        if (navItem === currentNavItem){
            return;
        }

        currentCarouselItem.classList.remove('active');
        currentNavItem.classList.remove('active');

        carouselItems[index].classList.add('active');
        navItem.classList.add('active');
    });
});
