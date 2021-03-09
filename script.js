
// bar onclick function

$( "#open" ).click(function() {
    $(".header ul").addClass("active");
    $(".header .bar-icon").addClass("active");
});


$( "#close" ).click(function() {
    $(".header ul").removeClass("active");
    $(".header .bar-icon").removeClass("active");
});



$( ".header ul li a" ).click(function() {
    $(".header ul").removeClass("active");
    if ($(".header .bar-icon").hasClass("active") == true){
        $(".header .bar-icon").removeClass("active");
    }
});

