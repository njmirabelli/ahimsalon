
// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});

/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

    $(document).scroll(function() {
      var logo, cutOff;
      logo = $(".navbar-brand");
      cutOff = 240;
    	if ($(document).scrollTop() < cutOff ) {
    		logo.hide();
    	} else {
            logo.slideDown('slow');
    	}
    });

  }
  initParallax();
  $('.showLogo').click(function(){
    $(".navbar-brand").slideDown('slow');
  });

  $('.hideLogo').click(function(){
    $(".navbar-brand").hide('fast');
  });


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
    });

});
