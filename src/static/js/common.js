// AOS.init({disable: 'mobile'});
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 1) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});
$('.header-logo a, .footer-logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
$('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    infinite: true,
    dots: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: "unslick"

        },
    ]
});

$(document).mouseup(function (e){
    var div = $('.header-phone, .header-nav, .header-btn');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('body').removeClass('scroll');
        $('.header, .header-btn').removeClass('active');
        $('.header-btn').find('span').toggleClass('hidden');
    }
});
$('.header-nav a').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('scroll');
    $('.header, .header-btn').removeClass('active');
    $('.header-btn').find('span').toggleClass('hidden');
    var $thsHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($thsHref).offset().top - 100
    }, 1000);
});
$('.footer-nav a').on('click', function (e) {
    e.preventDefault();
    var $thsHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($thsHref).offset().top
    }, 1000);
});
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $ths = $(this);
    $ths.toggleClass('active');
    $ths.find('span').toggleClass('hidden');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});
function checkTopPosition() {
    $('.work-item:nth-child(2)').each(function () {
        var $ths = $(this);
        $('.work-media').css('top', $ths.height() + $ths.offset().top - $('.work').offset().top - 260 + 'px');
        $ths.css('margin-bottom', $('.work-media').height()+ 50 + 'px')
    });
}
$(window).on('resize', function () {
    if($(window).width() < 992){
        checkTopPosition();
    }
});
$(window).on('load', function () {
    if($(window).width() < 992){
        checkTopPosition();
    }
});