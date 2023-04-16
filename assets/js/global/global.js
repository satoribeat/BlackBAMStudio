$(document).ready(function() {
    headerScroll();
});

function headerScroll() {
    $(window).scroll(function (){
        ($(window).scrollTop() > 50 || $(window).width() <= 980) ? $("header").addClass("nav_visible") : $("header").removeClass("nav_visible");
    });
}