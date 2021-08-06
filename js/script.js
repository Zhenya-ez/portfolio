$(document).ready(function () {
	$(".slider").slick({
		arrows: true,
		dots: true,
		slidesToShow: 4,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
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
