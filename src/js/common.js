$(document).ready(function() {

	$('.js-calendar').datepicker();
	$('.header__ham').click(function(event) {
		$('.nav').slideToggle();
	});

	$('.js-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: '.top__slide',
		nextArrow: $('.top__next'),
		prevArrow: $('.top__prev'),
		arrows: true,
		speed: 900,
		init: true
	});
	$('.js-horo').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: '.horo__slide',
		arrows: false,
		speed: 900,
		init: true,
		dots: true
	});

	$('.js-commonslider').each(function(index, el) {
		
	$prev = $(this).parents('.smallslider').find('.smallslider__prev');
	$next = $(this).parents('.smallslider').find('.smallslider__next');

	$(this).slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		slide: '.entry',
		nextArrow: $next,
		prevArrow: $prev,
		arrows: true,
		speed: 900,
		init: true,
		dots: true,
		responsive: [
		    {
		      breakpoint: 850,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 630,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    }
		    ]
	});

	});


});