
$(function() {
    // drop menu 

    $('.fas-menu').on('click', function() {
        menuToggle();
    });

    function menuToggle () {
    $('.drop-menu').toggle('slow');
    $('.fa-bars').toggleClass('fa-times');
    }

    
});














