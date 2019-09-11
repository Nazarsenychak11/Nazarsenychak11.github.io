$(document).ready(function() {
    $('.logo-menu-list').click(function () { 
      let elementClick = $(this).attr("href");
      let destination = $(elementClick).offset().top;
        $('html').animate( { scrollTop: destination }, 1500 );
      return false;
    });
// keep watch for scroll and show arrow
    $(window).on('scroll', () => {
        let btnTop = $('#btn-top');
        if($(this).scrollTop() >= 450) {
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut();
        }
    });
// event for btn
    $('#hide-top-raited').on('click', function() {
        slideToggle();
    });

   function slideToggle () {
    $('#blog').toggle('slow');
 }
});

 