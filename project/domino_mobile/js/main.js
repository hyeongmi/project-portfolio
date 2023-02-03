$(function(){
    
    mainInit();
    //링크막아주기
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    })

    $('.slick1').slick({
        slidesToShow: 2.2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots :true,
        infinite:true,
      });
          
})
function mainInit(){
    mainBar();
    jumun();
    gnb();
}

function mainBar(){
    let $mainbar =$('#visual .main-bar li');
    let $pagingli = $('#visual .paging li');
    let cnt = 0, size=$mainbar.length , timer = null, old=0, interval=4000;

    $pagingli.on('click',function(){
        cnt = $(this).index();
        if(cnt!=old){
            bar('100%','-100%')
        }
    })

    $mainbar.on('mouseenter',function(){
        clearInterval(timer);
    })
    $mainbar.on('mouseleave',function(){
        clearInterval(timer);
        timer = setInterval(make,interval);
    })

    timer = setInterval(make,interval);
    function make(){
        cnt++;
        if(cnt>size-1){
            cnt = 0;
        }
        bar('100%','-100%');
    }

    function bar(start,end){
        $mainbar.eq(cnt).css({left:start}).animate({left:0},400);
        $mainbar.eq(old).css({left:0}).animate({left:end},400);
        old = cnt;
        $pagingli.removeClass('on').eq(cnt).addClass('on')
        clearInterval(timer);
        timer = setInterval(make,interval);
    }

}

function jumun(){
    $('.main .con1 .text span').click(function(){
        $('.main .con1 .text span').css('background','#0078AD')
        $('.main .con1 .text span a').css('color','#fff')
    })
}

function gnb(){
    let $all = $('#header .all-menu');
    let $gnblia = $('#nav >.gnb> li> a');
    let $gnbul = $('#nav .gnb li ul');
    let $nav = $('nav');

    $all.on('click',function(){
        $nav.toggleClass('on');
    })
    $gnblia.on('click',function(){
        $gnbul.stop().slideUp();
         $(this).next().stop().slideDown();
        })
}