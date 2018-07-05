$(document).ready(function(){

	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		var top = $('.head__fixed').position().top;
		var padding = $('.head__fixed').height();
		if ($(window).outerWidth() > 989 && $(window).height() > 414) {
			if (top <= scroll) {
				$('.head__fixed').css({
					"position": "fixed",
					"top": "0"
				});
				$('.head').css('padding-top', padding + 'px');
			};
		};
	});

});