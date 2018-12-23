// Put your javascript or jquery here.
// Remember to comment well. Sections, which page it's used on, and what each function does, and in most cases what each line does.

var theElement = $('body > div');

$(theElement).each(function(i) {
  $(this).attr("data-slide", ( i + 1 ));
});

$('div[data-slide]').click(function() {
	alert("Yes, I recognize the attribute change to the element! -Mr. jQuery");
});

// Raman's Original Code
// $(function() {
// 	var imgThumbnail = $('.slide > div');
// 	$(function (i) {
// 		$(imgThumbnail).each(function(i) {
// 			$(this).attr("data-slide", ( i + 1 ));
// 			// console.log($(this).attr("data-slide", ( i + 1 )));
// 		});
// 	});
// });

// $('div[data-slide]').click(function() {
// 	alert("Hello! I am an alert box!!");
// 	// var slideno = $(this).data('slide');
// 	// $('.slider-gallery').slick('slickGoTo', slideno - 1);
// });