$(document).ready(function() {
//Toggles search glyph's static CSS change
	$('.list').click(function() {
		$('.list').not(this).removeClass('list-active');
		$(this).toggleClass('list-active');
	});
});