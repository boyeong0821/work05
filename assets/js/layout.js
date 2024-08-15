// 헤더 서브메뉴
menuFlag = false;
$('#gnbPc .main-item .title').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')) {
        $(this).removeClass('on').siblings().stop().slideUp();
        menuFlag = false;
    } else {
        if (menuFlag == false) {
            $(this).addClass('on').siblings('.sub').stop().slideDown();
            menuFlag = true;
        }else{
            $('#gnbPc .main-item .title').removeClass('on').siblings('.sub').hide();
            $(this).addClass('on').siblings('.sub').show();
        }
    }
});

$('#gnbPc .btn-close').click(function(){
    $('#gnbPc .main-item .title').removeClass('on').siblings('.sub').stop().slideUp();
    menuFlag = false;
})

// 모바일메뉴
$('#header .header-inner .mobile .btn-close').hide();

$('#header .header-inner .mobile .btn-mobile').click(function(){
    $('#header .header-inner .mobile .btn-mobile').hide();
    $('#header .header-inner .mobile .btn-close').show();

    $('html').addClass('hidden');
    $('#header .mobile-menu').addClass('on');
});

$('#header .header-inner .mobile .btn-close, .dimmed').click(function(){
    $('#header .header-inner .mobile .btn-mobile').show();
    $('#header .header-inner .mobile .btn-close').hide();

    $('html').removeClass('hidden');
    $('#header .mobile-menu').removeClass('on');
});

// 모바일 서브메뉴
$('#gnbM .main-item .title').click(function(e){
    e.preventDefault();

    $(this).toggleClass('on').siblings('.sub').stop().slideToggle();
});