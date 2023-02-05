$(function(){

  let ty = 0
  $(window).on('scroll', function(){
      ty  = $(this).scrollTop()
      
      if( ty >= 1000 ) {

          $('.progress-bar__bar').each(function(){
              let num = $(this).attr('data-num');
              num = Number( num )
          $(this).css('transform','translateX('+num+'%)');   	
          });
      }
  })

  $('.domino_m').on('click',function(){
    window.open('http://miming.co.kr/project/domino_mobile/index.html','win1','width=360, left=900, top=20, height=950');
  });

  $('.unjung').on('click',function(){
    alert('준비중입니다');
  })

})