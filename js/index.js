
$('.slider').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    useCSS: true,
    swipe: false,
    touchMove: false,
    arrows: true,
    useCSS: false,
    useTransform: false,
    waitForAnimate: false,
}).slick("pause");

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //e.preventDefault();
    //setTimeout(function(){
    //    $('.slider').slickPlay();
    //}),3000;
    //$('.slick-slide').animate({
    //    'opacity': '1'
    //}, 0);
    $('.slick-active').addClass('slide-out');
    $(this).addClass('is-changing');
});
//
$('.slider').on('afterChange', function(event, slick, currentSlide){
	//$('.slick-slide').animate({
    //    'opacity': '1'
    //}, 200);
    $('.slick-slide').removeClass('slide-out');
	$(this).removeClass('is-changing');
});


// var initialDelay = 3000;
//
// $(document).one("mousemove touchstart", function() {
//     setTimeout(function() {
//         $(".slider").slick("play");
//     },initialDelay);
// });
