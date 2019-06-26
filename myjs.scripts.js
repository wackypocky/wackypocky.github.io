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

function change(x) {
    x.classList.toggle("change");
    document.getElementById("hamburger-menu").classList.toggle("show");
    /*var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }*/
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function showPhotos(x) {
    x.classList.toggle("minus");
    var x = document.getElementById("drop-row");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

