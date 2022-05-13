
// preloder
$(window).on('load',function(){
    $('.preloder').delay(1000).fadeOut(700);
})

$('document').ready(function(){
    //header area
    $(window).scroll(function(){
        if ($(document).scrollTop() < 1){
            $('.header-area').removeClass('fixed')
            $('.header-area').removeClass('active-bg')
        }
        else if ($(document).scrollTop() > 200 ){
            $('.header-area').removeClass('fixed')
            $('.header-area').addClass('active-bg')   
        }
        else{
            $('.header-area').addClass('fixed')
        }
    })

    // owl carousel
    $('.bannar-area').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        smartSpeed:2000

    })
    // counter-Up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // mixitup
    var mixer = mixitup('.item-list');
    // wow js
    new WOW().init();
    // testimonials
    $('.testi-slide').owlCarousel({
        loop:true,
        margin:25,
        dots:false,
        nav:false,
        autoplay:true,
        autoplaySpeed:1500,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});

