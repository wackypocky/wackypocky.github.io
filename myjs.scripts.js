jQuery(document).ready(function($){
    var $root = $('html, body');
    $('a[href^="#"]').click(function(e) {
        var href = $.attr(this, 'href');
        e.preventDefault();
        $root.stop().animate({
            scrollTop: $(href).offset().top
        }, 'slow', function(){
            window.location.hash = href;
        });
        return false;
    });
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var x = document.getElementById("slide-down-to-content");
    if (x.className === "arrow") {
        x.className += " responsive";
    } else {
        x.className = "arrow";
    }
}