$(function(){
  
  
var map = $('#contact .map');
	
	
/*svg 지도 투명도 조절*/
    
    map.find('[fill="#FFFFFF"]').attr({opacity:'0.3',r:"4.5"});
    map.find('[fill="#ffffff"]').attr({opacity:'0.3',r:"4.5"});
   
 
/*시작할때 나라이름 한번 나타남*/
	map.find('dt').fadeIn(1000).delay(700).fadeOut(700);
	
	map.find('dt').eq(0).delay(1500).fadeIn(1000);
	
	/*while(MouseEvent=1){
	map.find{'.headquarterBtn'}.show();
		
	}*/
    
/*각 나라위치에 마우스를 올렸을때 이름(dt)가 나타남 */    
    map.find('.btn').mouseenter(function(){
        
        var btn = $(this).attr('id');
        
        console.log(btn);
        
        map.find('dt').stop().fadeOut();   /*현재 올린 영역에서 다른 지역으로 마우스*/
        map.find('dd').stop().fadeOut();   /*올리면 모든 나라이름 (dt dd) 사라짐*/
        
        switch (btn){
            case "headquarterBtn" :
                
                map.find('.headquarter').stop().fadeIn(300);
                
                break;
            case "ukBtn" :
                map.find('.uk').stop().fadeIn(300);
                map.find('.eastern').stop().fadeIn(300);
                break;
            case "frBtn" :
                map.find('.fr').stop().fadeIn(300);
                break;
            case "spptBtn" :
                map.find('.sppt').stop().fadeIn(300);
                break;
            case "scaBtn" :
                map.find('.sca').stop().fadeIn(300);
                break;
            case "gerBtn" :
                map.find('.ger').stop().fadeIn(300);
                break;
            default : 
                
        }            
        
    });
    
/*나라이름 클릭했을때 내용이 슬라이드 다운 && 
영국은 해당 나라가 두개이므로 하나 눌렀을때 다른 나라이름 사라짐*/    
    
    map.find('dt').on('click',function(){
        $(this).next().stop().slideToggle(300);
        });
    map.find('.uk').on('click',function(){
        map.find('.eastern').stop().fadeToggle(300);
        });
    map.find('.eastern').on('click',function(){
        map.find('.uk').stop().fadeToggle(300);
        });
    
    
    
/*맵 영역을 벗어났을때 모든 나라이름 사라짐*/
     map.mouseleave(function(){
         
        map.find('dt').stop().fadeOut(); 
        map.find('dd').stop().fadeOut(); 
         
     });
    
    
    
 /*각 나라 위치에 마우스 올리고 뗐을때 효과*/   
    
    mouse('#headquarterBtn','.headquarterBtn');
    mouse('#ukBtn','.ukBtn');
    mouse('#frBtn','.frBtn');
    mouse('#spptBtn','.spptBtn');
    mouse('#scaBtn','.scaBtn');
    mouse('#gerBtn','.gerBtn');
   
	map.find('.headquarterBtn').show();
    
    function mouse(x,y){
    	
		
        map.find(x).mouseenter(function(){
			map.find('.headquarterBtn').hide();
			map.find(y).show();});
        map.find(x).mouseleave(function(){
			map.find(y).hide();});
    };

 
  });