$(function () {
    $('.header__search').on('click', function () {
        $('.search__box').toggleClass('search__box--active');
    });

    $('.lang-switcher').on('click', function () {
        $('.lang-en').toggleClass('lang-en--active')
    })

    $('.post__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });

    $('.post__slider-reviews').slick({
        infinite: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        focusOnSelect: true
        //autoplay: true,
        //autoplaySpeed: 5000,
    });

    $(".footer__btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});