$(document).ready(function() {
  $('.arrow').on('custom', function() {
    $(this).toggleClass('animate');
    console.log('Call!');
  });

  setInterval(function() {
    $('.arrow').trigger('custom');
  }, 550);
});
