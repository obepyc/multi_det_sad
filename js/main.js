$(document).ready(function(){

	// Block

	$("a").on("click", function(){
		return false;
	});

	$("form").on("submit", function(){
		return false;
	});

	// Slider
	$('.flexslider').flexslider({
		animation: 'fade',
		controlsContainer: '.flexslider'
	});

	$('.review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	});

});