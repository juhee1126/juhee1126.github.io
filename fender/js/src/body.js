$(function(){
    
    var bodytext = $('#bodyBox .bodyText');
    
    
    
    for(i=0;i<3;i++){
        
    var span_w01 = bodytext.find('li').width() + 26;
       
        bodytext.find('div').eq(i).css({width:span_w01});
    }
    
    bodytext.find('div').mouseover(function(){
        
    
        $(this).prev().stop().animate({marginLeft:'0%'},600,'linear',function(){
            $(this).animate({marginLeft:'50%',backgroundColor:'#c20c0c',color:"#fff"},400,'linear');
            
            var li_num = bodytext.find('span').index(this);
            console.log(li_num);
            if(li_num == 0){
               $(this).text('Telecaster');
            }else if(li_num == 1){
                $(this).text('Alder');
            }else{
                $(this).text('Polyester');
            }
        });/*animate_effect*/
        
        
        
    });/*mouseover*/
    
    bodytext.find('div').mouseout(function(){
        
        $(this).prev().stop().animate({marginLeft:'0%',backgroundColor:'#fff',color:'#111'},800,'linear',function(){
            $(this).animate({marginLeft:'50%'},600,'linear');
           
            
            var li_num = bodytext.find('span').index(this);
            if(li_num == 0){
                
                $(this).text('Body shape');
            }else if(li_num == 1){
                $(this).text('Body material');
            }else{
                $(this).text('Body finish');
            }
        });
        
    });/*mouseout*/
    
});