$(document).ready(function() {
    headerScroll();                                                                 /* To show header on scroll */
    scrollSpy()                                                                     /* To scroll spy */
    $("body").on("click", ".service_tab li button", showServices);                  /* To show service tab contents */
    $("body").on("click", ".portfolio_image_show", showPOrtfolioImages);            /* To show portfolio images on the modal */
    $("body").on("click", "button[data-target='#portfolio_modal']", openPortfolio); /* To open portfolio modal */
});

/* To show header on scroll */
function headerScroll() {
    $(window).scroll(function (){
        ($(window).scrollTop() > 50 || $(window).width() <= 980) ? $("header").addClass("nav_visible") : $("header").removeClass("nav_visible");
    });
}

/* To scroll spy */
function scrollSpy(){
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        // $("#left_nav_bar").removeClass("show_navs_bar");
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo",
                );
                return false;
            }
        }
    });
    $("body").scrollspy({
        target: "header > ul",
        offset: 250,
    });
}

/* To show service tab contents */
function showServices() {
    let button = $(this);
    // $(".service_content").find(".active").fadeOut();
    button.closest(".container").find(".active").removeClass("active")
    button.closest("li").addClass("active");
    $(".service_content").find("." + button.attr("data-service")).addClass("active");
}

/* To show portfolio images on the modal */
function showPOrtfolioImages() {
    let button = $(this);
    button.closest(".carousel-item").find(".showcase").removeClass("showcase");
    button.addClass("showcase");
    button.closest(".carousel-item").find("." + button.attr("data-show")).addClass("showcase");
}

/* To open portfolio modal */
function openPortfolio() {
    let creatives_profile = $(this).attr("data-creative-profile");
    $("#creatives_carousel_modal").find(".carousel-inner").find(".active").removeClass("active");
    $("#creatives_carousel_modal").find("." + creatives_profile).addClass("active");
}