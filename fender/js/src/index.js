// index.js
 $(function(){
 	$('.loading').animate({opacity:1},2500)
 	$('h1').find('img').fadeIn(3000);
 	$('.hidden').css({'display':'none'});
 	$('h2').fadeIn(3000,function(){
 		$('#wrap').fadeOut(1000, function(e){
 			document.location.href= "mainpage.html";
 			// document.location.reload("loading.html");
 			});
 		});
  });
