$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });


    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        return false;
    });

    // Header scroll class
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }


    var ellipsestext = "...";
    $('.more-120').each(function () {
        var content = $(this).html();
        if (content.length > 139) {
            var c = content.substr(0, 139);
            var html = c + ellipsestext;
            $(this).html(html);
        }
    });



    // Smooth scroll for the menu and links with .scrollto classes
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 50;

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 800, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('ion-android-close ion-android-menu');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    //Replace carousel images into background images.
    $('img.imgBG').each(function () {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url(' + imgSrc + ')'});
        $(this).remove();
    });

    $('.itemheight').matchHeight();


    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

});



