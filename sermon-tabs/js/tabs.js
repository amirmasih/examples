//Variable Setup
var watchTab = $( ".watch-tab" );
var listenTab = $('.listen-tab');
var downloadTab = $('.download-tab');
var watchContent = $( "#watch-content" );
var listenContent = $('#listen-content');
var downloadItems = $('.download-tab > ul');
var tabNav = $('nav.tabs');
var mobileClickAway = $('.dropdown-backdrop');

//Toggle to listen content when click listen
$(listenTab).click(function(){	
	$(watchContent).removeClass('active');
	$(listenContent).addClass('active');
	$(watchTab).removeClass('active');
	$(this).addClass('active');
});

//Toggle to watch content when click watch
$(watchTab).click(function(){	
	$(listenContent).removeClass('active');	
	$(watchContent).addClass('active');
	$(listenTab).removeClass('active');
	$(this).addClass('active');
});

//Toggle download dropdown content when click watch & when click away
$(downloadTab).click(function(e){
	$(downloadItems).fadeToggle();
	$(downloadItems).toggleClass('active');
	e.stopPropagation();
	$(this).toggleClass('active');
//	if mobile we use a backdrop because click events don't delegate
//	if('ontouchstart' in document.documentElement) {
//		$('<div class="dropdown-backdrop"></div>').appendTo('body');
//		$('.dropdown-backdrop').click(function(){
//			$('div').remove('.dropdown-backdrop');
//		});
//		$(downloadTab).click(function(i){
//			$('div').remove('.dropdown-backdrop');
//			i.stopPropagation();
//		});
//	};
});

//Hide dropdown when click away
$(document).click(function() {
	if($(downloadItems).hasClass('active')){
		$(downloadItems).fadeToggle();
		$(downloadItems).removeClass('active');
		$(downloadTab).removeClass('active');
	}
});