$('.slider').on('init', function(event, slick ){
    $('.slide1').addClass('slick-first');

});

$('.slider').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    //useCSS: true,
    swipe: false,
    touchMove: false,
    arrows: true,
    useCSS: true,
    useTransform: false,
    waitForAnimate: false,
});

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //e.preventDefault();
    //setTimeout(function(){
    //    $('.slider').slickPlay();
    //}),3000;
    // $('.slick-slide').animate({
    //    'opacity': '1',
    //    'transition-duration': '0s !important'
    // }, 0);
    //$(".slider").slick("slickPause");
    $('.slide1').removeClass('slick-first');
    $('.slick-active').addClass('slide-out');
    $('.slick-slide').removeClass('slide-delayed');
    $(this).addClass('is-changing');
});
//
$('.slider').on('afterChange', function(event, slick, currentSlide){
	// $('.slick-slide').animate({
    //    'opacity': '1',
    //    'transition-duration': '0s'
    // }, 200);
    //$(".slider").slick("slickPlay");
    $('.slick-slide').removeClass('slide-out');
    $('.slick-active').addClass('slide-delayed');
	$(this).removeClass('is-changing');
});


// var initialDelay = 3000;
//
// $(document).one("mousemove touchstart", function() {
//     setTimeout(function() {
//         $(".slider").slick("play");
//     },initialDelay);
// });
