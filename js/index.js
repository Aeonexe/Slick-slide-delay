$('.slider').on('init', function(event, slick ){
    //$('.slide1').addClass('slick-first');
    //$('.slide1').addClass('myyyyy');

});



$('.slider').slick({
    // autoplay: true,
    // autoplaySpeed: 4000,
    infinite: true,
    speed: 0,
    fade: true,
    //cssEase: 'linear',
    useCSS: false,
    swipe: false,
    touchMove: false,
    arrows: true,
    useTransform: false,
    waitForAnimate: false,
    arrows: true,
    //appendArrows: $('#main-slider-nav'),
    // prevArrow: '<a href="#">Prev</a>',
    // nextArrow: '<a href="#">Sig</a>',
});

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //e.preventDefault();
   // var current = $slides[currentSlide]
    // console.log("Before: ", slick.$slides[currentSlide]);
    // console.log("Before: ", event);

    // var current = slick.$slides[currentSlide];
    // $(current).addClass('slick-out');
    // $('.slick-slide').not(current).removeClass('slick-out');
    // $(current).removeClass('slick-in');

    // setTimeout(function () {
    $(".slick-slide").animate({
        opacity: '1',
        //left: '100%'
    });
    // }, 2000);

    

    // setTimeout(function(){
    // }, 2000);

});
//
$('.slider').on('afterChange', function(event, slick, currentSlide){
    // console.log("After: ", slick.$slides[currentSlide]);
    // console.log("After: ", currentSlide);
    
    // var current = slick.$slides[currentSlide];
    // $(current).removeClass('slick-out');
    // $(current).addClass('slick-in');
    
    // setTimeout(function () {
        $(".slick-slide").animate({
            opacity: '1',
        });
        
    // }, 2000);

    // setTimeout(function () {
    // }, 2000);

});

