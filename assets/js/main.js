function showProjectDetail(img, title, content){
    $('#modalTitle').html(title);
    $("#project-modal-img").attr('src', img);
    $("#modal-content-paragrapt").html(content);
    $('#projectModal').modal(
        {
            'show': true,
            'keyboard': true,
            'focus': true
        }
    );
}


function say_hello(){
    $("#intro").typed({
        strings: ["Hello!", "I&#8217;m Raihan Kabir"],
        typeSpeed: 10,
	    backSpeed: 0,
	    showCursor: false,
	    cursorChar: '',
	    fadeOut: true,
	    fadeOutDelay: 400,
	    backDelay: 600,
	    startDelay: 1000,
	    loop: true,
        loopCount: 1,
    });
}


var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false,
    callback: function(box){},
    scrollContainer: null,
    resetAnimation: true,
});


wow.init();

$('#scrollToNext').click(function(e){
   e.preventDefault();
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top)
            }, 1500, "easeInOutExpo");
            return false;
        }
    }
});


$('#scrollToTop').click(function(e){
   e.preventDefault();
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top)
            }, 1500, "easeInOutExpo");
            return false;
        }
    }
});

/*===============================================================*/

$(document).ready(function(){

    // check bg img load and stop loader
    $('<img/>').attr('src', 'https://rk4bir.github.io/assets/img/cover.png').on('load',function() {
       $(this).remove();
       $('#loader').fadeOut();
    });

    say_hello();
    
    $('[data-lightbox]').click(function(e){
        e.preventDefault();
        var img = $(this).attr('data-lightbox');
        var title = $(this).attr('data-title');
        var content = $(this).attr('data-content');
        showProjectDetail(img, title, content);
    });
    
    $('#projectModalCloseBtn').click(function(e){
        e.preventDefault();
        $('#projectModal').modal('hide');
    });
});
