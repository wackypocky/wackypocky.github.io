// Only fire once when resizing
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();


$(document).ready(function()
    {
    var pageId = $('body').attr('id');
    var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
    
    if (pageId == 'home-index')
        {
        var containerOffset = $('#container').offset();
        var containerVerticalOffset = containerOffset.top;
        //var breakpoint = containerVerticalOffset - (containerVerticalOffset * 0.1); // Mobile crap requires error margin
        var breakpoint = 1;
        var verticalOffset = window.pageYOffset;
        var currentBackgroundIndex = 1;
        
        // Background image
        if(!isiPhone){
            $('body').append('<div id="alternative-background"></div>');
        } else {
            $('#alternative-background').css('display','none');
        }
        // Intro stuff
        $('#intro figure').prepend('<a href="javascript:void(0);" id="close-intro">Close intro</a>');
        
        $('#proceed-to-content').click(function(event)
            {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: containerVerticalOffset
                }, 1000);
            });
        
        $('#close-intro').click(function(event)
            {
            $('#intro article').fadeOut(500);
            });
        
        $(window).resize(function()
            {
            waitForFinalEvent(function()
                {
                containerOffset = $('#container').offset();
                containerVerticalOffset = containerOffset.top;
                breakpoint = containerVerticalOffset - (containerVerticalOffset * 0.1);
                }, 100, "some unique string");          
            });
        
        if (verticalOffset >= breakpoint && currentBackgroundIndex != 2)
            {
                if(!isiPhone){
                    $('#alternative-background').show();
                    currentBackgroundIndex = 2;
                }   
            }
        
        $(document).scroll(function()
            {
            waitForFinalEvent(function()
                {
                verticalOffset = window.pageYOffset;
                
                if (verticalOffset >= breakpoint && currentBackgroundIndex != 2)
                    {
                        if(!isiPhone){
                            $('#alternative-background').fadeIn(250);
                            currentBackgroundIndex = 2;
                        }   
                    }
                else if (verticalOffset < breakpoint && currentBackgroundIndex != 1)
                    {
                            if(!isiPhone){
                                $('#alternative-background').fadeOut(250);
                                currentBackgroundIndex = 1;
                            }
                    }
                
                //alert(verticalOffset + ' / ' + containerVerticalOffset + ' / ' + breakpoint);
                }, 100, "another unique string");           
            });
        }
    });