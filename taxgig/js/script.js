$('.show_popup').click(function() {
	var popup_id = $('#' + $(this).attr('rel'));
	$(popup_id).show();
	$('.overlay_popup').show(200);
	$('.show_popup').hide();
});

$('.close').click(function() {
	$('.overlay_popup, .popup').hide(200);
	$('.show_popup').show();
});

$('.list-btn-one').click(function() {
	$('.list__footer-one').fadeToggle(200);
});

$('.list-btn-two').click(function() {
	$('.list__footer-two').fadeToggle(200);
});

$('.list-btn-three').click(function() {
	$('.list__footer-three').fadeToggle(200);
});
