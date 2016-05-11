// Header text animation
$(function () {
    $(".element").typed({
        strings: ["STARTUP!", "OUR SITE!"],
        typeSpeed: 100,
        loop: true
    });
});

// Worknavs animation

$(document).ready(function () {

    $(".workNavs li a").click(function () {
        var btnClass = $(this).attr("class");

        $(".workGal > div[class!=btnClass]").fadeOut();
        $(".workGal > ." + btnClass).fadeIn(1500);
        if (btnClass == "all") {
            $(".workGal > div").fadeIn(1500);
        }
    })

});

// navbar background

$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $('.myNav').addClass("fixed");
    } else {
        $('.myNav').removeClass("fixed");
    }
});

// about hover

$(".aboutPic").hover(
    
    function () {
        var i=$(".aboutPic").index(this);
        i++;
        $(".iconsHide"+i).addClass("aboutIcons aboutCover");
    },
    function () {
        var i=$(".aboutPic").index(this);
        i++;
        $(".iconsHide"+i).removeClass("aboutIcons aboutCover");
    }
);


//slider nabroski)

// var imageWidth=$(".col-md-3").width();

// $(".aboutPic > .fa-arrow-left").click(function(){
//     console.log(imageWidth);
//     $("#slider").animate({"margin-right":+imageWidth+'px'} ,"slow");
// });

// blog hover



$(".blogHov").hover(
    function () {

        $("h5,span,a",this).addClass("blogRed");
    },
    function () {
        $("h5,span,a",this).removeClass("blogRed");
    }
);