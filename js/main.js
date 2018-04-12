$(document).ready(function() {
  // === Event Listeners ===
  $('.jumbotron').click(function() {
    $('html, body').animate({
      scrollTop: $('#subsitution').offset().top
    }, 1200);
  });

  // Focus directly input in section
  $('.input-wrapper > input').focus();

  //==== Hide Header on on scroll down ====
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header-fixed').outerHeight();

  $(window).scroll(function(){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight)
      $('.header-fixed').removeClass('nav-down').addClass('nav-up');
    else if ( st + $(window).height() < $(document).height() )
      $('.header-fixed').removeClass('nav-up').addClass('nav-down');

    lastScrollTop = st;
  }
});
