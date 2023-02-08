   $(window).scroll(function() {

    if ($(this).scrollTop()>100)
     {
        $('.pop-up').fadeOut();
     }
    else
     {
      $('.pop-up').fadeIn();
     }
 });