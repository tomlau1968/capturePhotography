$(function() {
  $.scrollify({
    section: "section",
    before: function(index, sections) {
      if ((index + 1) == sections.length) {
        $(".arrowbutton").hide();
      } else {
        if ($(".arrowbutton").is(':hidden')) {
          $(".arrowbutton").show();
        }
      }
    }
  });
  $(".arrowbutton").click(function() {
    $.scrollify.next();
  });
});
//
$(document).ready(function() {


  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.arrowupbutton').fadeIn();
    } else {
      $('.arrowupbutton').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.arrowupbutton').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});
