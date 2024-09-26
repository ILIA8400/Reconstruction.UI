// Menu
$(function() {
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
        $('.nav-menu').toggleClass('custom-navbar-ham');
    });
});

$(window).scroll(function () { 
    let position = $(this).scrollTop();
    if (position > 200) {
        $('.nav-menu').addClass('custom-navbar');
    }
    else $('.nav-menu').removeClass('custom-navbar');
});

$(window).scroll(function () { 
    let position = $(this).scrollTop();
    if (position > 380) {
        $('.banner-heading').addClass('banner-heading-back').removeClass('banner-heading');
        $('.banner-par').addClass('banner-par-back').removeClass('banner-par');
    } else {
        $('.banner-heading-back').addClass('banner-heading').removeClass('banner-heading-back');
        $('.banner-par-back').addClass('banner-par').removeClass('banner-par-back');
    }
});

// end menu