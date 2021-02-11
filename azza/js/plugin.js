/*global $ window document*/
$(document).ready(function () {

	var winH = $(window).height(),
		upperH = $('.upper-bar').innerHeight(),
		navH = $('.navbar').innerHeight()
	// console.log(`windo ${winH}. upper ${upperH}. navbar ${navH}`);
	$('.slider, .carousel-item').height(winH - (upperH + navH));
	
$('.featured-work ul li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		console.log($(this).data('class'));
		if ($(this).data('class') === '.all'){
			$('.shufle-imags .col-md').css('opacity', 1);
		} else {
			$('.shufle-imags .col-md').css('opacity', '.09');
			$($(this).data('class')).parent().css('opacity', 1);
			$('.shufle-imags .col-md').css('transition', 'all 2s esae-in-out');
			
		}
	})
	

});