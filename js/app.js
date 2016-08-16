$(document).ready(function() {
	//Slide Toggle for Home page portfolio divs
	$('.port-div').click(function() {
		$(this).children('.port-div-slide').slideToggle(250);
	});
});