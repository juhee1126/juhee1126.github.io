(function(){
    
    var electext = $('#elecBox .elecText');
    
    
    
    for(i=0;i<4;i++){
        
    var elecspan_w = $('#elecBox').find('li').eq(i).width();
        console.log(elecspan_w);
       
        electext.find('div').eq(i).css({width:elecspan_w});
    }
    
    electext.find('div').mouseover(function(){
        
    
        $(this).prev().stop().animate({marginLeft:'0%'},600,function(){
            $(this).animate({marginLeft:'50%',backgroundColor:'#c20c0c',color:"#fff"},400);
            
            var li_num = electext.find('span').index(this);
            console.log(li_num);
            if(li_num == 0){
               $(this).text('Standard Single-Coil Tele');
            }else if(li_num == 1){
                $(this).text('Standard Single-Coil Tele');
            }else if(li_num ==2){
                $(this).text('Master Volume, Master Tone');
            }else{
                $(this).text("3-position blade position");
                
                
            }
        });
        
    });
    
    electext.find('div').mouseout(function(){
        
        $(this).prev().stop().animate({marginLeft:'0%',backgroundColor:'#fff',color:'#111'},800,function(){
            $(this).animate({marginLeft:'50%'},600);
           
            
            var li_num = electext.find('span').index(this);
            if(li_num == 0){
                
                $(this).text('Neck Pickup');
            }else if(li_num == 1){
                $(this).text('Bridge Pickup');
            }else if(li_num ==2){
                $(this).text('Controls');
            }else{
                $(this).text('Pickup Switching');
                
            }
        });
        
    });
    
})(this.jQuery);