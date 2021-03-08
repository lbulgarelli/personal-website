// Get viewport dimensions
vw = $(window).width();
vh = $(window).height()

me_height = .24 * vh + .12 * vw // 24vh + 12vw
social_height = .05 * vw;
me_margin = .02 * vw;

$(window).resize(function(e){
    $("#photo").outerHeight('');
    $(".social").outerHeight('');
    $("#photo").css("margin", '');
    me_height = .24 * vh + .12 * vw // 24vh + 12vw
    social_height = .05 * vw;
    me_margin = .02 * vw;
    scroll_header(e);
});

$(window).scroll(scroll_header);

function scroll_header(e){
    scroll_top = $(window).scrollTop();
    // Disable resizing for small screens and negative scroll
    if(scroll_top < 0 || $(window).width() <= 768) return;
    // Resize photo
    new_height = me_height - scroll_top;
    $("#photo").outerHeight(new_height);
    // Resize photo margins for better proportions
    if(scroll_top <= 250)
        $("#photo").css("margin", me_margin * (1 - scroll_top / 350));
    else
        $("#photo").css("margin", me_margin * (1 - 250 / 350));
    // Disable resizing social media for small screens
    if($(window).width() <= 945) return;
    // Resize social media icons
    $(".social").outerHeight(social_height - scroll_top / 5);
}