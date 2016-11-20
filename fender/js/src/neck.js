$(function(){
  $('#neckTextBox>ul').on('mouseenter', function(e){
    $(this).find('li').eq(0).find('span').fadeOut(500, function(){
      $(this).parent('li').eq(0).animate({width:0},800, function(){
        var test = $(this).next('li').find('span').width();
        // console.log(test)
        $(this).next('li').animate({width:test+'px'},800,function(){
          $(this).children('span').fadeIn(800);
        });
      });
    });
  });
});