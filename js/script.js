$(document).ready(function () {
	$(".slider").slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					arrows: false,
				},
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	});
});
