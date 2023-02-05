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

})
function mainInit(){
    gnb();
    mainBanner();
    stroybanner();
    newsbanner();
    intro();
}

//메뉴
function gnb(){
    
}
//메인배너
function mainBanner(){
        let $mainli=$('#visual .banner li');
        let  $pagingli = $('#visual .paging1 li');
        let cnt=0, old=0, size=$mainli.length, timer=null, interval=4000;
        
        let href='', ty=0 , top=0;
        let h =$('#header').height();

        $(window).on('scroll',function(){
            top=$(window).scrollTop();
            console.log(top);

            if(top>h){
                $('#header').addClass('on');
            }else{
                $('#header').removeClass('on');
            }
        })

        $pagingli.on('click',function(){
            cnt = $(this).index();
            if(cnt != old){
                banner('100%','-100%');
            }
        })

        timer = setInterval(make,interval);
        function make(){
            cnt++
            if(cnt>size-1){
                cnt=0;
            }
            banner('100%','-100%');
        }

        $mainli.on('mouseenter',function(){
            clearInterval(timer);
        })
        $mainli.on('mouseleave',function(){
            clearInterval(timer);
            timer=setInterval(make,interval);
        })

        function banner(start,end){
            $mainli.eq(cnt).css({left:start}).animate({left:0},400);
            $mainli.eq(old).css({left:0}).animate({left:end},400);
            $pagingli.removeClass('on').eq(cnt).addClass('on');
            old = cnt;
            clearInterval(timer);
            timer = setInterval(make,interval);
        }
}

//스토리리스트
function stroybanner(){
let $mainli = $('.main .substance .story .list li');
let $pagingli =$('.main .substance .story .paging2 li');
let cnt=0, old=0, size=$mainli.length, timer=null, interval=4000;

$pagingli.on('click',function(){
    cnt = $(this).index();
    if(cnt != old){
        banner('100%','-100%');
    }
})

timer = setInterval(make,interval);
function make(){
    cnt++
    if(cnt>size-1){
        cnt=0;
    }
    banner('100%','-100%');
}

$mainli.on('mouseenter',function(){
    clearInterval(timer);
})
$mainli.on('mouseleave',function(){
    clearInterval(timer);
    timer=setInterval(make,interval);
})


function banner(start,end){
    $mainli.eq(cnt).css({left:start}).animate({left:0},400);
    $mainli.eq(old).css({left:0}).animate({left:end},400);
    $pagingli.removeClass('on').eq(cnt).addClass('on');
    old = cnt;
    clearInterval(timer);
    timer = setInterval(make,interval);
    }
}

//뉴스배너
function newsbanner(){
    let $prev = $('.main .news .button .prev');
    let $next = $('.main .news .button .next');
    let $ul =$('.main .news .newsli');
    let first='', last='';

    last = $('.main .news .newsli li');
    $ul.prepend(last);
    $ul.css({marginLeft:'-=10'});

    $prev.on('click',function(){
       $ul.animate({marginLeft:'+=447'},200,function(){
        last = $('.main .news .newsli li').last();
        $ul.prepend(last);
        $ul.css({marginLeft:'-=447'});
       })
    })

    $next.on('click',function(){
        $ul.animate({marginLeft:'-=447'},200,function(){
         first = $('.main .news .newsli li').first();
         $ul.append(first);
         $ul.css({marginLeft:'+=447'});
        })
     })

    }
    
function intro(){
let $mainli = $('.main .intro .trobg li');
let $pagingli =$('.main .intro .trpaging li');
let $textro = $('.main .intro .introin .texryo li div');
let $introimg =$('.main .intro .introin .tro');
let cnt=0, old=0, size=$mainli.length, timer=null, interval=4000;
let posX=[];
posX=[0.-1000,-2000,-3000,-4000,-5000,-6000];

$pagingli.on('click',function(){
    cnt = $(this).index();
    if(cnt != old){
        banner('100%','-100%');
    }
})

timer = setInterval(make,interval);
function make(){
    cnt++
    if(cnt>size-1){
        cnt=0;
    }
    banner('100%','-100%');
}

$mainli.on('mouseenter',function(){
    clearInterval(timer);
})
$mainli.on('mouseleave',function(){
    clearInterval(timer);
    timer=setInterval(make,interval);
})

function banner(start,end){
    $mainli.eq(cnt).css({left:end}).animate({left:0},0);
    $mainli.eq(old).css({left:0}).animate({left:start},0);

    $textro.eq(cnt).css({left:end}).animate({left:400},0).hide().fadeIn();
    $textro.eq(old).css({left:400}).animate({left:start},0);
    $pagingli.removeClass('on').eq(cnt).addClass('on');
    old = cnt;

    $introimg.animate({left:posX[cnt]},400)
    clearInterval(timer);
    timer = setInterval(make,4000);
}
    }

