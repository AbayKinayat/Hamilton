var block_show = false;
 
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.section-two').offset().top;
	var eh = $('.section-two').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		// Код анимации
		$('.about-numbers__smooth-line1').style.width = '100%'
	}
}
 
	
$(document).ready(function(){ 
	scrollTracking();
});