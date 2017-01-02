$(function() {
	var video_list=[
		{"link":"https://www.youtube.com/embed/StzfQEruOyw?html5ui=1&autoplay=true","img":"./img/bg_video_00.png","text":"Fender American Standard Stratocaster Demo"},
		{"link":"https://www.youtube.com/embed/Z5zkaiOrMPo?html5ui=1&autoplay=true","img":"./img/bg_video_01.png","text":"Fender Reso Tele Guitar"},
		{"link":"https://www.youtube.com/embed/LtsG5eAZj0c?html5ui=1&autoplay=true","img":"./img/bg_video_02.png","text":"David Gilmour - The Fender 50th Birthday Celebration (Full Concert)"},
		{"link":"https://www.youtube.com/embed/pvu7Y91xUKM?html5ui=1&autoplay=true","img":"./img/bg_video_03.png","text":"Fender FA135CE Concert Acoustic-Electric Guitar"},
		{"link":"https://www.youtube.com/embed/T7LPuTdH3Og?html5ui=1&autoplay=true","img":"./img/bg_video_04.png","text":"Fender Concert Tone Mandolin Unboxing with Cranbourne Music"},
		{"link":"https://www.youtube.com/embed/z1hI8BUbuws?html5ui=1&autoplay=true","img":"./img/bg_video_05.png","text":"Gary Moore - Red House (Jimi Hendrix Cover) (Fender Stratocaster 50th Anniversary) [HQ]"},
		{"link":"https://www.youtube.com/embed/eTIARMUA-qo?html5ui=1&autoplay=true","img":"./img/bg_video_06.png","text":"Fender CD-60 vs. Rogue RA-090 Guitar Review"},
	];

var left = $('.leftBtn');
var right = $('.rightBtn');
var videoBox = $('#videoBox');
var box_ul = $('#videoBox>ul');
var vbox = $('#video');
var playBtn = $('.play>button');
var video_li = $('#videoBox li'); 	
var nav = $('#videoNav');
    
//start
    menu = $('#menu').delay(500).fadeIn(500);   
    logo = $('#topBtn').delay(500).fadeIn(500);   
    videoBox.fadeIn(1000);
    box_ul.animate({marginTop:'12vw'},1000);  
    left.parent().delay(1000).fadeIn(1000);
    left.delay(1000).animate({left:'5rem'},500);
    right.delay(1000).animate({right:'5rem'},500);
    vbox.find('.videoTitle').delay(1800).fadeIn(1000); 
    nav.children().eq(0).delay(2000).fadeIn(1000);
    nav.children().eq(1).delay(2200).fadeIn(1000);
    nav.children().eq(2).delay(2400).fadeIn(1000);
    nav.children().eq(3).delay(2600).fadeIn(1000);
    nav.children().eq(4).delay(2800).fadeIn(1000);
    nav.children().eq(5).delay(3000).fadeIn(1000);
    nav.children().eq(6).delay(3200).fadeIn(1000);

// slideVideo.js
  var stand_class_name = $('.nav_03').attr('class');
  var stand_class_num = stand_class_name.slice(5,6);
  nav.find('li').eq(stand_class_num).css({backgroundColor:'#c22'});
    
  left.on('click',function() {
        
	  box_ul.find('li:last').prependTo(box_ul);
	  nav.children('li:first').appendTo(nav);
	  box_ul.find('iframe').remove();
    
	var box_4_class_name = box_ul.find('li:nth-child(4)').attr('class');
  var box_4_num = parseInt(box_4_class_name.slice(7,8));
      
    $('body').css({backgroundImage:"url(" + video_list[box_4_num].img +")"});
    vbox.find('.videoTitle').find('span').text(video_list[box_4_num].text);
   
});

	
right.on('click',function() {
	
  box_ul.find('li:first').appendTo(box_ul);
	nav.children('li:last').prependTo(nav);    
	box_ul.find('iframe').remove();

  var box_4_class_name = box_ul.find('li:nth-child(4)').attr('class');
  var box_4_num = parseInt(box_4_class_name.slice(7,8));
     
  $('body').css({backgroundImage:"url(" + video_list[box_4_num].img +")"});
  vbox.find('.videoTitle').find('span').text(video_list[box_4_num].text);
    
});
    
nav.find('li').on('click',function(){
    var li_clicknum = $(this).index();
    var li_click_class_name = nav.find('li').eq(li_clicknum).attr('class');
    var li_click_class_num = li_click_class_name.slice(5,6);
//    $(this).focus();
    console.log("for문 전 li index 값: "+ $(this).index()); 
    if(stand_class_num<li_click_class_num){
        move_left(stand_class_num,li_click_class_num);
    }else{
        move_right(stand_class_num,li_click_class_num);
    }
	 nav.find('li').eq(li_clicknum).focus();
});
   
  function move_left(x,y){
    for(x;x<y;x++){
      box_ul.find('li:first').appendTo(box_ul).animate(300);
	    nav.children('li:last').prependTo(nav);
	    box_ul.find('iframe').remove();
      
      var box_4_class_name = box_ul.find('li:nth-child(4)').attr('class');
      var box_4_num = parseInt(box_4_class_name.slice(7,8));
       
      $('body').css({backgroundImage:"url(" + video_list[box_4_num].img +")"});
      vbox.find('.videoTitle').find('span').text(video_list[box_4_num].text);
		 }
	}
    
    function move_right(x,y){
    for(x;x>y;x--){
            
		box_ul.find('li:last').prependTo(box_ul).animate(300);
	       nav.children('li:first').appendTo(nav);
	
	
	       box_ul.find('iframe').remove();
        var box_4_class_name = box_ul.find('li:nth-child(4)').attr('class');
       
     var box_4_num = parseInt(box_4_class_name.slice(7,8));
   
        $('body').css({backgroundImage:"url(" + video_list[box_4_num].img +")"});
    vbox.find('.videoTitle').find('span').text(video_list[box_4_num].text);	}
   
    
	}
// playVideo.js	
		playBtn.on('click',function(e) {
			e.preventDefault();
			var class_name = $(this).parent().parent().attr('class');
			var slice_name = class_name.slice(7,8);
			$(this).parent().parent().prepend('<iframe>');
			$(this).parent().parent().find('iframe').attr({'src':video_list[slice_name].link});
		});

//링크연결 
    $('.mnbTextBox').find('li').on('click',function(e){
        var index = $(this).index();
        if(index == 2){
            $('#mnb').fadeOut(500);
        }
        else{ $('#mnb').fadeOut(500);
            
            
    nav.children().eq(6).fadeOut(1000);
    nav.children().eq(5).delay(50).fadeOut(1000);
    nav.children().eq(4).delay(100).fadeOut(1000);
    nav.children().eq(3).delay(150).fadeOut(1000);
    nav.children().eq(2).delay(200).fadeOut(1000);
    nav.children().eq(1).delay(250).fadeOut(1000);
    nav.children().eq(0).delay(300).fadeOut(1000);
    
    vbox.find('.videoTitle').fadeOut(1000);
    right.delay(500).animate({right:'0rem'},500);
    left.delay(500).animate({left:'0rem'},500);
    left.parent().delay(800).fadeOut(1000);
    box_ul.delay(800).animate({marginTop:'0vw'},1000);
 
    videoBox.delay(1000).fadeOut(1000);
    $('.content').delay(1000).fadeOut(1000,function(){

                switch(index){
                    case 0:
                        location.href = 'index.html';
                    break;
                    case 1:
                        location.href = 'mainpage.html';
                    break;
                    case 3:
                        location.href = 'aboutus.html';
                    break;
                    case 4:
                        location.href = 'contact.html';
                    break;
                        }//switch
                    
                    });
                   
          
        }//else
    });//function aboutus

});
// jquery function


