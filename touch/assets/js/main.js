// Put your javascript or jquery here.
// Remember to comment well. Sections, which page it's used on, and what each function does, and in most cases what each line does.

$(document).ready(function() {
  $('.js-hover').on('touchstart touchend', function(e) {
      $(this).toggleClass('hover_effect');
  });
});