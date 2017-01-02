$(function(){
  var timed = 400;
  var neck_text = $('#neckTextBox>ul');

  var neck_list = [
                    {neck: neck_text.eq(0).children('li:nth-child(2)').width() },
                    {neck: neck_text.eq(1).children('li:nth-child(2)').width() },
                    {neck: neck_text.eq(2).children('li:nth-child(2)').width() },
                    {neck: neck_text.eq(3).children('li:nth-child(2)').width() },
                    {neck: neck_text.eq(4).children('li:nth-child(2)').width() },
                    {neck: neck_text.eq(5).children('li:nth-child(2)').width() },
                  ];
  var neck_list_f = [
                    {neck: neck_text.eq(0).children('li:first-child').width() },
                    {neck: neck_text.eq(1).children('li:first-child').width() },
                    {neck: neck_text.eq(2).children('li:first-child').width() },
                    {neck: neck_text.eq(3).children('li:first-child').width() },
                    {neck: neck_text.eq(4).children('li:first-child').width() },
                    {neck: neck_text.eq(5).children('li:first-child').width() },
                  ];
  neck_text.children('li:nth-child(2)').css({width:0, overflow:'hidden'});

  neck_text
    .on('mouseenter',function() {
      var textw = $(this).index();
      console.log(textw);
      console.log(neck_list[textw].neck);
        $(this).find('li:first-child').find('span').fadeOut(timed, function() {
          $(this).parent().stop().animate({width:0}, timed*2, function(){
            $(this).next('li').stop().animate({width:neck_list[textw].neck}, timed*2, function(){
              $(this).find('span').delay(timed).fadeIn(timed);
            });
          });
         });
      });
    neck_text.on('mouseleave', function() {
      var textw = $(this).index();
      $(this).find('li:nth-child(2)').find('span').fadeOut(timed/2,function(){
        $(this).parent().stop().animate({width:0}, timed*2, function(){
          $(this).prev('li').stop().animate({width:neck_list_f[textw].neck}, timed*2, function(){
            $(this).find('span').delay(timed).fadeIn(timed/2);
          });
        });
      });
  });
});



