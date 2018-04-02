$(document).ready(function () {

    /*
    -smooth page scrolling -
    */
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });



    /*
    -ANIMATIONS ON SCROLL-
    When a scrolling to a certain point, perform a certain action
    */

    //toggle navbar, animations
    $("#about").waypoint(function (direciton) {
        $("#navbar-one").toggleClass("navbar-style navbar-fixed-top");
        $("#navbar-list-select").toggleClass("js--nav-list");
        $("#brand-con").toggleClass("brand-container2 brand-container");
        $("#nav-button").toggleClass("button-margin");
        $("#down-arrow").toggleClass("fadeInDown animated");
        $(".js--wp1").addClass("animated fadeIn");

    }, {
        offset: 60
    });

    $("#skills").waypoint(function (direciton) {
        $(".js--wp2").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });

    $("#portfolio").waypoint(function (direciton) {
        $(".js--wp3").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });

    $("#project1").waypoint(function (direciton) {
        $(".js--wp4").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });
    $("#project2").waypoint(function (direciton) {
        $(".js--wp5").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });
    $("#project3").waypoint(function (direciton) {
        $(".js--wp6").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });

    //auto close nav when clicked
    $("#nav-button").click(function(){
        // $("#down-arrow").removeClass("fadeInDown animated");
        $("#down-arrow").toggleClass("hidden", function(e){
            
        })
    });
    
    $('.navbar-collapse a ').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
    $('.logo').click(function () {
        $(".navbar-collapse").collapse('hide');
    });


});