$(window).on('scroll' , function(){
	if($(this).scrollTop()){

		$('.navbar').addClass('menuSize');
		$('.navbar-toggler span').addClass('menuWhite');
		$('.logo-content h1, .logo-content p, .navbar li a').addClass('text-white');
	}else{
		$('.navbar').removeClass('menuSize');
		$('.navbar-toggler span').removeClass('menuWhite');
		$('.logo-content h1, .logo-content p, .navbar li a').removeClass('text-white');
			
		}
});