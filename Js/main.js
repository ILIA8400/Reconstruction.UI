$(function() {
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})

// Menu
$(window).scroll(function () { 
    let position = $(this).scrollTop();
    if (position > 200) {
        $('.nav-menu').addClass('custom-navbar');
    }
    else $('.nav-menu').removeClass('custom-navbar');
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


//Enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//end

// Footer

//brands
for (let index = 0; index < 3; index++) {
    const brands = ["instagram","linkdin","telegram"]
    const colors = ["danger","primary","info"]

    $(`#${brands[index]}`).hover(function () {
        // over
        $(`#${brands[index]}`).addClass(`bg-${colors[index]}`);
    }, function () {
        // out
        $(`#${brands[index]}`).removeClass(`bg-${colors[index]}`);

    });   
}
//end brands

for (let index = 0; index < 2; index++) {
    const sec = ["concats","phones"]
    
    $(`.${sec[index]} a`).hover(function () {
        // over
        $(this).removeClass("text-white").addClass("text-danger");
    }, function () {
        // out
        $(this).removeClass("text-danger").addClass("text-white");
    }
);
}

//end


