$(function() {

	
var left = $('.leftBtn');
var right = $('.rightBtn');
var box = $('#videoBox>ul');

var playBtn = $('.play>button');
var video_li = $('#videoBox li'); 	
var nav = $('#videoNav');


	
// slideVideo.js
	
    var stand_class_name = $('.nav_03').attr('class');
    var stand_class_num = stand_class_name.slice(5,6);
    nav.find('li').eq(stand_class_num).css({backgroundColor:'#c22'});
    
left.on('click',function() {
	
	
	var box_first_class_name = box.find('li:first').attr('class');
	var box_first_num = box_first_class_name.slice(7,8);
	var left_event_box_first_num = parseInt(box_first_num)-1;
    if(left_event_box_first_num == -1){left_event_box_first_num = 6;}

    
	box.find('li:last').prependTo(box);
	nav.children('li:first').appendTo(nav);
	
	
	box.find('iframe').remove();
	
	
	
});

	
right.on('click',function() {
	
	var box_first_class_name = box.find('li:first').attr('class');
	var box_first_num = box_first_class_name.slice(7,8);
	var right_event_box_first_num = parseInt(box_first_num)+1;
	if( right_event_box_first_num == 7){right_event_box_first_num = 0;}
	
	
	
	
	box.find('li:first').appendTo(box);
	nav.children('li:last').prependTo(nav);
    
	box.find('iframe').remove();
	
	

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
    console.log("li index 값: "+ $(this).index());    
       
});
   
    function move_left(x,y){
    for(x;x<y;x++){
		  
            box.find('li:first').appendTo(box).animate(300);
	        nav.children('li:last').prependTo(nav);
    
	        box.find('iframe').remove();
		 }
    
	}
    
    function move_right(x,y){
    for(x;x>y;x--){
            
		box.find('li:last').prependTo(box).animate(300);
	       nav.children('li:first').appendTo(nav);
	
	
	       box.find('iframe').remove();
		}
   
    
	}
// playVideo.js	
	
		var video_list=[

			{"link":"https://www.youtube.com/embed/StzfQEruOyw?html5ui=1&autoplay=true"},
			{"link":"https://www.youtube.com/embed/Z5zkaiOrMPo?html5ui=1&autoplay=true"},
			{"link":"https://www.youtube.com/embed/LtsG5eAZj0c?html5ui=1&autoplay=true"},
			{"link":"https://www.youtube.com/embed/Mt1FwK5SUxM?html5ui=1&autoplay=true"},
			{"link":"https://www.youtube.com/embed/T7LPuTdH3Og?html5ui=1&autoplay=true"},
			{"link":"https://www.youtube.com/embed/pvu7Y91xUKM?html5ui=1&autoplay=true"},
			{"link":"https://www.youtube.com/embed/eTIARMUA-qo?html5ui=1&autoplay=true"},

		];
	
		playBtn.on('click',function(e) {

			e.preventDefault();
			var class_name = $(this).parent().parent().attr('class');
			var slice_name = class_name.slice(7,8);
			

			$(this).parent().parent().prepend('<iframe>');

			$(this).parent().parent().find('iframe').attr({'src':video_list[slice_name].link});


		});


});
