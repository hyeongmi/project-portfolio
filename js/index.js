$(function(){
  $(document).on('click','a[href="#"]',function(e){
    e.preventDefault();
  })

  // let len=$('.con-box').length, prev=0, next=0;

  // $('.con-box').mousewheel(function(e){
  //         console.log(e.deltaY);
  //     if (e.deltaY >0 && $(this).index()>0){ 
  //         prev=$(this).prev().offset().top;
  //         $('html,body').animate({scrollTop: prev},300);
  //         console.log(prev);
  //     }else if(e.deltaY<0 && $(this).index()<len-1){ 
  //         next =$(this).next().offset().top;
  //         $('html,body').animate({scrollTop: next},300);
  //         console.log(next);
  //     }
  // });



  $('.domino_m').on('click',function(){
    window.open('http://miming.co.kr/project/domino_mobile/index.html','win1','width=360, left=900, top=20, height=950');
  });

  $('.unjung').on('click',function(){
    alert('페이지가 재 리뉴얼 되어, 코드 확인을 할 수 있도록 준비중입니다');
  });


});

