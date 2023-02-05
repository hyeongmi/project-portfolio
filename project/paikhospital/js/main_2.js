$(function(){
    mainInit();
    //링크막아주기
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    })
        $('.family .f_title').click(function(){
        $('.family .f_list').slideToggle(400);
    })

    $('.family .f_list').on('mouseleave',function(){
        $('.family .f_list').hide();
    })

    let top=0;

    $('.top').hide();

    $(window).on('scroll',function(){
        top=$(window).scrollTop();

        if(top>150){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    })

    

    $('.top').on('click',function(){
        $('html,body').animate({scrollTop: 0},300);
    })

    $(window).trigger('scroll');

})
function mainInit(){
    gnb();
    mainBanner();
    newsBanner();

}

function gnb(){
    let $gnbli =$('#header .nav .mainmenu');
    let h=$('#header').height();
    let top=0;

    $gnbli.hover(function(){
        $('#header').stop().animate({height:380},300);
    })
    $gnbli.on('mouseleave',function(){
        $('#header').stop().animate({height:100},300)
    })

    $(window).on('scroll',function(){
        top=$(window).scrollTop();
        
        if(top>h){
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }
    })
   
}

function mainBanner(){
    let $mainbanner =$('#visual .main-banner li');
    let $pagingli = $('#visual .paging > li');
    let cnt = 0, size=$mainbanner.length , timer = null, old=0, interval=4000;

    $pagingli.on('click',function(){
        cnt = $(this).index();
        if(cnt!=old){
            banner('100%','-100%')
        }
    })

    $mainbanner.on('mouseenter',function(){
        clearInterval(timer);
    })
    $mainbanner.on('mouseleave',function(){
        clearInterval(timer);
        timer = setInterval(make,interval);
    })

    timer = setInterval(make,interval);
    function make(){
        cnt++;
        if(cnt>size-1){
            cnt = 0;
        }
        banner('100%','-100%');
    }

    function banner(start,end){
        $mainbanner.eq(cnt).css({left:start}).animate({left:0},400);
        $mainbanner.eq(old).css({left:0}).animate({left:end},400);
        old = cnt;
        $pagingli.removeClass('on').eq(cnt).addClass('on')
        clearInterval(timer);
        timer = setInterval(make,interval);
    }

}
function newsBanner(){
    let $prev = $('.main .history .button .prev');
    let $next = $('.main .history .button .next');
    let $ul =$('.main .history .list .h-list');
    let first='', last='';

    last = $('.main .history .list .h-list  li');
    $ul.prepend(last);

    $prev.on('click',function(){
       $ul.animate({marginLeft:'+=354'},200,function(){
        last = $('.main .history .list .h-list  li').last();
        $ul.prepend(last);
        $ul.css({marginLeft:'-=354'});
       })
    })

    $next.on('click',function(){
        $ul.animate({marginLeft:'-=354'},200,function(){
         first = $('.main .history .list .h-list  li').first();
         $ul.append(first);
         $ul.css({marginLeft:'+=354'});
        })
     })

    }