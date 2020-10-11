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

$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
     
    }, 1000);


 $('.heading, .get-in-touch-section h1').attr({

 	'data-aos': 'fade-up',
 	'data-aos-anchor-placement' : "top-bottom",
 });

 $('.social-icons ul li a').attr({

 	'data-aos' : "flip-up",
 });

  AOS.init(); 

  $("body").niceScroll({
   	  cursorcolor: "#de2b24",
      cursorwidth: "10px",
      cursorborder: "none",
      zindex: [9999],
      scrollspeed: 80,
      mousescrollstep: 50,
      horizrailenabled: false,
});


 
});
