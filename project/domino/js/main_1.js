$(function(){
    mainInit();
    //링크막아주기
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    })



})
function mainInit(){
    mmenu();
    mainBanner();
    members();
    events();
}

//메뉴
function mmenu(){
    let h=$('#header').height();
    let top=0;
    $(window).on('scroll',function(){
        top=$(window).scrollTop();
        
        if(top>h){
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }
    })
}
//메인배너
function mainBanner(){
    let $mainbanner =$('#visual .main-banner li');
    let $pagingli = $('#visual .paging li');
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

//members
function members(){
let $memberli = $('.main .mania .menu .img li');
let $memberlist = $('.main .mania .list li');
let cnt =0 , size=$memberli.length, old = 0;

$memberlist.on('click',function(){
    cnt=$(this).index();
    if(cnt!=old){
        member('100%','-100%')
    }
})

function member(start,end){
    $memberli.eq(cnt).css({left:start}).animate({left:0});
    $memberli.eq(old).css({left:0}).animate({left:end});
    old=cnt;
    $memberlist.removeClass('on').eq(cnt).addClass('on');
}
}
    
function events(){
    let $eventlist =$('.main .event  .e-text li');
    let cnt = 0, size=$eventlist.length , timer = null, old=0, interval=4000;

   
    $eventlist.on('mouseenter',function(){
        clearInterval(timer);
    })
    $eventlist.on('mouseleave',function(){
        clearInterval(timer);
        timer = setInterval(make,interval);
    })

    timer = setInterval(make,interval);
    function make(){
        cnt++;
        if(cnt>size-1){
            cnt = 0;
        }
        eventslist('100%','-100%');
    }

    function eventslist(start,end){
        $eventlist.eq(cnt).css({left:start}).animate({left:0},400);
        $eventlist.eq(old).css({left:0}).animate({left:end},400);
        $eventlist.removeClass('on');
        $eventlist.eq(cnt).addClass('on');
        old=cnt;
        clearInterval(timer);
        timer = setInterval(make,interval);
    }
}

