var PERCENTAGE = 10;
var LOADING = null;


function showProjectDetail(img, title, content){
    $('#modalTitle').html(title);
    $("#project-modal-img").attr('src', img);
    $("#modal-content-paragrapt").html(content);
    $('#projectModal').modal('show');
}


function loader(){
    PERCENTAGE -= 1;
    $('#loading-percentage').html(PERCENTAGE);
    if(PERCENTAGE == 0){
        $('#body').removeClass('d-none');
        $('#pageLoader').addClass('d-none');
        say_hello();
        wow.init();
    }
}


function say_hello(){
    $("#intro").typed({
        strings: ["Hello!", "I&#8217;m Raihan Kabir"],
        typeSpeed: 1,
    });
}


var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false,
    callback: function(box){

    },
    scrollContainer: null,
    resetAnimation: true,
});


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
$(window).ready(function(){
    LOADING = setInterval(loader, 800);
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
