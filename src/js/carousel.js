


// Our Projects swiper
const swiper = new Swiper(".swiper-1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletActiveClass:
            "swiper-pagination-bullet-active our-projects__button--active",
        bulletClass: "swiper-pagination-bullet our-projects__button"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});

const swiper2 = new Swiper(".swiper-2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletActiveClass:
            "swiper-pagination-bullet-active our-projects__button--active",
        bulletClass: "swiper-pagination-bullet our-projects__button"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});

const swiper3 = new Swiper(".swiper-3", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletActiveClass:
            "swiper-pagination-bullet-active our-projects__button--active",
        bulletClass: "swiper-pagination-bullet our-projects__button"
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});

