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
})