//  addBanner.js
$(function() {
  'use strict';
      
  var banner            = $('.bannerBox'),
      bannerParentWidth = banner.parent().width(),
      banLi             = banner.find('li'),
      banLiLength       = banLi.length+1,
      bannerBox         = bannerParentWidth * banLiLength,
      banLiFirst        = banner.find('li').first(),
      banLiWid          = bannerParentWidth,
      banLihei          = banner.find('li').height(),  
      ind               = $('.indicate'),
      indLi             = ind.find('li'),
      indLiFirst        = ind.find('li').first(),
      l_btn             = $('.lbtn'),
      r_btn             = $('.rbtn'),         
      slideTime         = 1000,
      settingTime       = 1100;
      indLiFirst.addClass('indWidth');// 인디게이터 크기 활성화
      
      // banner가로 값 길이 계산
      // console.log(banLiWid);
      banner.width(bannerBox); // banner ul값 설정
      banner.css({marginLeft: -100 +'%'});
      // console.log(bannerBoxWidth / (banLiLength+1));
      banLi.width(banLiWid);
      // 배너 부모기준으로 넘치는 영역 숨기기
      banner.parent().css({overflow:'hidden'});
      // 첫번째 이미지 보이기
       banLi.last().clone().prependTo('.bannerBox');
       indLi.last().clone().prependTo('.indicate');  

      // 인디게이터 표시 및 위치 이동
      indLi.on('click', function(){
       var $this = $(this),
           index = $this.index(),
           indexPlus = index - 1,
           banLi = banner.find('li'),
           banLiWid = banner.find('li').width();
          $this.addClass('indWidth')
               .siblings().removeClass('indWidth');
          banner.stop().animate({'margin-left':-banLiWid*index},slideTime,function(){
        });
      });
      
      // slidebtn 버튼클릭
      l_btn.on('click', function(){
          var bannerML = parseInt(banner.css('margin-left'));
          if(bannerML == -banLiWid){
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime, function(){
              banner.css({'margin-left':-banLiWid*(banLiLength-1)})
            });
            $('.indicate li').last().addClass('indWidth').siblings().removeClass('indWidth');
          }else{
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime)
            var bannerMarginCut = Math.abs( parseInt($('.bannerBox').css('margin-left') ) ) / $('.bannerBox').find('li').width();
             $('.indicate li').eq(bannerMarginCut-1).addClass('indWidth').siblings().removeClass('indWidth');
            // console.log(bannerMarginCut);
          };
        });
        
      var rightBtn = function(){
        r_btn.on('click', function(){
            var bannerML = parseInt(banner.css('margin-left'));
            if(bannerML <= -banLiWid*(banLiLength-1)){
              banner.css({'margin-left':0}).stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime);
            }else{
              banner.stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime)
            };
          var bannerMarginCut = Math.abs( parseInt($('.bannerBox').css('margin-left') ) ) / $('.bannerBox').find('li').width();
           $('.indicate li').eq(bannerMarginCut+1).addClass('indWidth').siblings().removeClass('indWidth');
          // console.log(bannerMarginCut);
        });
      };
      rightBtn();
      
      indLi = ind.find('li').eq(0);
      indLi.first().css({'display':'none'});
   
    // 자동움직임
    //   var timer;
    //   function startBtn(){ settingTime = setInterval('$(".rbtn").click()', 2000) };
    //   function stopBtn(){	clearInterval( settingTime )};
    //   startBtn()
    //   $('.bannerBox').on({mouseenter:stopBtn ,mouseleave:startBtn});
});