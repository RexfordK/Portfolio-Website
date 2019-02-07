$(document).ready(function () {
  if (window.location.protocol === "http:") {
    window.location.href = "https:" + window.location.href.slice(5);
  }
  /*-smooth page scrolling -*/
  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener("click", function (e) {
      
  //     document.querySelector(this.getAttribute("href")).scrollIntoView({
  //       behavior: "smooth",
  //       block: "start"
  //     });
  //     e.preventDefault();
  //   });
  // });

  // URL updates and the element focus is maintained
// originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

// filter handling for a /dir/ OR /indexordefault.page
function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
}

var locationPath = filterPath(location.pathname);
$('a[href*="#"]').each(function () {
  var thisPath = filterPath(this.pathname) || locationPath;
  var hash = this.hash;
  if ($("#" + hash.replace(/#/, '')).length) {
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(hash), target = this.hash;
      if (target) {
        $(this).click(function (event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
            location.hash = target; 
            $target.focus();
            if ($target.is(":focus")){ //checking if the target was focused
              return false;
            }else{
              $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
              $target.focus(); //Setting focus
            };
          });       
        });
      }
    }
  }
});
  /* -ANIMATIONS ON SCROLL-When a scrolling to a certain point, perform a certain action */
  //toggle navbar, animations
  $("#about").waypoint(
    function (direciton) {
      $("#navbar-one").toggleClass("navbar-style navbar-fixed-top");
      $("#navbar-list-select").toggleClass("js--nav-list");
      $("#brand-con").toggleClass("brand-container2 brand-container");
      $("#nav-button").toggleClass("button-margin");
      $("#down-arrow").toggleClass("fadeInDown animated");
      $(".js--wp1").addClass("animated fadeIn");
    },
    {
      offset: 60 //How far (in px) from the top of the screen do i want to offset this
    }
  );

  $("#skills").waypoint(
    function (direciton) {
      $(".js--wp2").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $("#portfolio").waypoint(
    function (direciton) {
      $(".js--wp3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $("#project1").waypoint(
    function (direciton) {
      $(".js--wp4").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );
  $("#project2").waypoint(
    function (direciton) {
      $(".js--wp5").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );
  $("#project3").waypoint(
    function (direciton) {
      $(".js--wp6").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );
  $("#project4").waypoint(
    function (direciton) {
      $(".js--wp7").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );

  //auto close nav when clicked
  $("#nav-button").click(function () {
    $("#down-arrow").toggleClass("hidden");
  });

  $(".navbar-collapse a ").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  $(".logo").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
});

