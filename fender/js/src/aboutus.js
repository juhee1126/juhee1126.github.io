$(function(){
// about
var menu = $('#menu').delay(1000).fadeIn(1000);
var logo = $('#topBtn').delay(1000).fadeIn(1000);
var aboutBox = $('#aboutBox').fadeIn(1000);
var about_tit = $('#aboutBox').find('#aboutTitleBox').delay(1500).fadeIn(500);
var about_txt = $('#aboutBox').find('#aboutTextBox').delay(2000).fadeIn(1500);
var about_btn = $('#aboutBox').find('button').delay(2500).fadeIn(1500);

// 링크연결 aboutus
	$('.mnbTextBox').find('li').on('click',function(e){
		var index = $(this).index();
		console.log(index);
		if(index == 3){
			$('#mnb').fadeOut(500);
		}
		
		else{$('#mnb').fadeOut(500);
			$('#aboutBox').find('button').fadeOut(500,function(){
			 $('#aboutTextBox').fadeOut(700,function(){
				$('#aboutTitleBox').fadeOut(900,function(){
					$('.content').fadeOut(500,function(){

				switch(index){
					case 0:
						location.href = 'index.html';
					break;
					case 1:
						location.href = 'mainpage.html';
					break;
					case 2:
						location.href = 'video.html';
					break;
					case 4:
						location.href = 'contact.html';
					break;
						}//switch
						});
					});
				});
			});
		}//else
	});//function aboutus
});