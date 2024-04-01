document.addEventListener('DOMContentLoaded', function () {
    //Burger menu
    $(document).ready(function () {
        $('#nav-icon1').click(function () {
            $(this).toggleClass('open');
            $('.header__menu').fadeToggle();
            // $('.header__user-block').fadeToggle();
        });
    });

    //Navigation links
    const selector = '.nav__link';
    const elems = Array.from(document.querySelectorAll(selector));
    const navigation = document.querySelector('nav');

    function makeActive(evt) {
        const target = evt.target;

        if (!target || !target.matches(selector)) {
            return;
        }

        elems.forEach(elem => elem.classList.remove('active'));

        evt.target.classList.add('active');
    };

    navigation.addEventListener('mousedown', makeActive);


    // Swipers
    var swiper = new Swiper(".swiper", {
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 6,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiperGenres = new Swiper(".swiper-genres", {
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiperActors = new Swiper(".swiper-actors", {
        slidesPerView: 2,
        spaceBetween: 60,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia('(min-width:1200px)');
    // keep track of swiper instances to destroy later
    let mySwiper;
    //////////////////////////////////////////////////////////////////
    const breakpointChecker = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (swiperGenres !== undefined && swiperActors !== undefined)
                swiperGenres.destroy(true, true);
            swiperActors.destroy(true, true);
            // or/and do nothing
            return;
            // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return enableSwiper();
        }
    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
});