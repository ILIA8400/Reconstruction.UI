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


// animation for steps
for (let index = 0; index < 5; index++) {
    const right =[0,2,4]
    const positions = [1050,1292,1592,1792,2096]

    $(window).scroll(function () { 
        let position = $(this).scrollTop();
        if (position > positions[index]) {
            if(right.includes(index)){
                $(`.step${index+1}-title`).addClass('ani-right-step');
                $(`.step${index+1}-text`).addClass('ani-right-text');
            }
            else{
                $(`.step${index+1}-title`).addClass('ani-left-step');
                $(`.step${index+1}-text`).addClass('ani-left-text');
            }
        }
        else{
            if(right.includes(index)){
                $(`.step${index+1}-title`).removeClass('ani-right-step');
                $(`.step${index+1}-text`).removeClass('ani-right-text');
            }
            else{
                $(`.step${index+1}-title`).removeClass('ani-left-step');
                $(`.step${index+1}-text`).removeClass('ani-left-text');
            }
            
        } 
    });
}

//end

