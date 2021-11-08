(function($) {
    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);

     //service slider js
    $('.serviceslider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2
            },
            479: {
                items: 2
            },
            574: {
                items: 3
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1440: {
                items: 5
            }
        }
    })

    //offer slider js
    $('.offerslider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            574: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1440: {
                items: 5
            }
        }
    })

    //gallery-slider js
    $('.gallery-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 2,
                margin: 10
            },
            574: {
                items: 2
            },
            767: {
                items: 4
            },
            992: {
                items: 6
            },
            1440: {
                items: 6
            }
        }
    })

    //discount-slider js
    $('.discount-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            574: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 3
            },
            1440: {
                items: 3
            }
        }
    })


    //block-slider js
    $('.block-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            574: {
                items: 2
            },
            767: {
                items: 2
            },
            992: {
                items: 2
            },
            1440: {
                items: 3
            }
        }
    })

