
$('.slider').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    useCSS: true,
    swipe: false,
    touchMove: false,
    arrows: true
});

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-slide').animate({'opacity': '1' }, 0);
    $('.slick-active').addClass('slide-out');
	$(this).addClass('is-changing');
});

$('.slider').on('afterChange', function(event, slick, currentSlide){
	$('.slick-slide').animate({'opacity': '1' }, 200);
    $('.slick-slide').removeClass('slide-out');
	$(this).removeClass('is-changing');
});
