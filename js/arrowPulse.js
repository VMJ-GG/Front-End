$(document).ready(function() {
  $('.arrow').on('custom', function() {
    $(this).toggleClass('animate');
  });

  setInterval(function() {
    $('.arrow').trigger('custom');
  }, 550);
});
