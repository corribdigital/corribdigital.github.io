//Hides scroll arrow when the user scrolls down
$(document).scroll(function() {
	scrollTop = $(window).scrollTop();
	scrollDistance = 20;

	if (scrollTop > scrollDistance) {
		$('.scroll-down').css({
			"animation-name":"fade-out",
			"animation-duration":"1s",
			"animation-fill-mode":"forwards",
		});
	} else {
		$('.scroll-down').css("opacity", "1");
	}
});

//Animates the skills bars in when they enter the viewport
$(document).scroll(function() {
	scrollBottom = $(window).scrollTop() + $(window).height();
	scrollTop = $(window).scrollTop();
	skillBarOffset = $('.skill-bar').offset().top;
	scrollDistance = 100;

	if (scrollBottom > skillBarOffset + scrollDistance && scrollTop < skillBarOffset - scrollDistance) {
		$('.skill-bar').css({
			"animation-name":"skill-bar-animation",
			"animation-duration":"1.5s",
			"animation-fill-mode":"forwards"
		});
	}
});

//Animates the portfolio images in when they enter the viewport
$(document).scroll(function() {
	scrollBottom = $(window).scrollTop() + $(window).height();
	scrollTop = $(window).scrollTop();
	workImagesOffset = $('.images-wrap').offset().top;
	scrollDistance = 100;

	//Debug
	console.log("scrollTop: " + scrollTop);
	console.log("div offset: " + workImagesOffset + scrollDistance);
	console.log("scrollBottom: " + scrollBottom);

	//When viewport is greater than 1155px
	if (scrollBottom > workImagesOffset + scrollDistance && scrollTop < workImagesOffset - scrollDistance)
	{
		$('.work-image-left').css({
			"animation-name":"work-image-left-animation",
			"animation-duration":"1.5s",
			"animation-delay":"2s",
			"animation-fill-mode":"forwards"
		});

		$('.work-image-right').css({
			"animation-name":"work-image-right-animation",
			"animation-duration":"1.5s",
			"animation-delay":"2s",
			"animation-fill-mode":"forwards"
		});

		$('.work-image-large').css({
			"animation-name":"work-image-large-bounce",
			"animation-duration":"1.5s",
			"animation-fill-mode":"forwards"
		});
	}
});
