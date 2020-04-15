// scroll functions
(function($) {
    $(window).scroll(function(e) {

        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $('.navbar').addClass("navbar-hide");
            $('.top-bar').addClass("navbar-hide");
        } else {
            $('.navbar').removeClass("navbar-hide");
            $('.top-bar').removeClass("navbar-hide");
        }

    });
})(jQuery);