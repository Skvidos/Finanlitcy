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

    $(".sideMenu").hover(function () {
        $('.sideMenu__ico-text__box').toggleClass('sideMenu__ico-text__box--active');
        $('.sideMenu__text').toggleClass('sideMenu__text--active');
        $('.sideMenu__ico-img').toggleClass('sideMenu__ico-img--active');
    });

    $('.post__transfer-value').on('click', function () {
        $('.post__transfer-value_list').toggleClass('post__transfer-value_list--active')
    })

    //USD 

    $('.post__transfer-value-us__list').on('click', function () {
        $('.post__transfer-value-ru--active').removeClass('post__transfer-value-ru--active').addClass('post__transfer-value-ru--nactive');
        $('.post__transfer-value-kz--active').removeClass('post__transfer-value-kz--active').addClass('post__transfer-value-kz--nactive');
        $('.post__transfer-value-us--nactive').removeClass('post__transfer-value-us--nactive').addClass('post__transfer-value-us--active');

        $('.post__transfer-value-us_list--active').removeClass('post__transfer-value-us_list--active').addClass('post__transfer-value-us_list--nactive');
        $('.post__transfer-value-kz_list--nactive').removeClass('post__transfer-value-kz_list--nactive').addClass('post__transfer-value-kz_list--active');
        $('.post__transfer-value-ru_list--nactive').removeClass('post__transfer-value-ru_list--nactive').addClass('post__transfer-value-ru_list--active');
    })

    //KZT

    $('.post__transfer-value-kz__list').on('click', function () {
        $('.post__transfer-value-ru--active').removeClass('post__transfer-value-ru--active').addClass('post__transfer-value-ru--nactive');
        $('.post__transfer-value-us--active').removeClass('post__transfer-value-us--active').addClass('post__transfer-value-ru--nactive');
        $('.post__transfer-value-kz--nactive').removeClass('post__transfer-value-kz--nactive').addClass('post__transfer-value-kz--active');

        $('.post__transfer-value-kz_list--active').removeClass('post__transfer-value-kz_list--active').addClass('post__transfer-value-kz_list--nactive');
        $('.post__transfer-value-en_list--nactive').removeClass('post__transfer-value-en_list--nactive').addClass('post__transfer-value-en_list--active');
        $('.post__transfer-value-ru_list--nactive').removeClass('post__transfer-value-ru_list--nactive').addClass('post__transfer-value-ru_list--active');
    })

    //RUB

    $('.post__transfer-value-ru__list').on('click', function () {
        $('.post__transfer-value-us--active').removeClass('post__transfer-value-us--active').addClass('post__transfer-value-us--nactive');
        $('.post__transfer-value-kz--active').removeClass('post__transfer-value-kz--active').addClass('post__transfer-value-kz--nactive');
        $('.post__transfer-value-ru--nactive').removeClass('post__transfer-value-ru--nactive').addClass('post__transfer-value-ru--active');

        $('.post__transfer-value-kz_list--nactive').removeClass('post__transfer-value-kz_list--nactive').addClass('post__transfer-value-kz_list--active');
        $('.post__transfer-value-en_list--nactive').removeClass('post__transfer-value-en_list--nactive').addClass('post__transfer-value-en_list--active');
        $('.post__transfer-value-ru_list--active').removeClass('post__transfer-value-ru_list--active').addClass('post__transfer-value-ru_list--nactive');
    })

});