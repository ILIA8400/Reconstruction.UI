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

$('.concats a').hover(function () {
    // over
    $(this).removeClass("text-white").addClass("text-theme-color");
}, function () {
    // out
    $(this).removeClass("text-theme-color").addClass("text-white");
}
)

for (let index = 0; index < 4; index++) {
    $(`.phones a:nth-child(${index+1})`).hover(function () {
        // over
        $(`.phones a:nth-child(${index+1}) i`).removeClass("text-white").addClass("text-theme-color");
    }, function () {
        // out
        $(`.phones a:nth-child(${index+1}) i`).removeClass("text-theme-color").addClass("text-white");
    }
    )
}
//end