$(document).ready(function(){

	var headerHeight = $('header').outerHeight();
	var wndWidth =  $(window).width();

	if( wndWidth > 640 ) {$('.main-section').css('paddingTop', headerHeight);}

	$('.menu-btn').on('click', function () {
		if( $(this).hasClass('active-menu') ){
			$(this).removeClass('active-menu');
			$('.mobile-menu').removeClass('active');
		} else{
			$(this).addClass('active-menu');
			$('.mobile-menu').addClass('active');
		}
	});
	$('li').on('click', function(){
		var link = $(this).children().attr('href'),
		    top = $(link).offset().top;

		if( $(this).hasClass('active') ){ return true;}
		$('li.active').removeClass('active');
		$(this).addClass('active');

		$('body,html').animate({scrollTop: top}, 500);

		
			$('.menu-btn').removeClass('active-menu');
			$('.mobile-menu').removeClass('active');
	});

	$('.slider-wrapper').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		// adaptiveHeight: true
	});
});
