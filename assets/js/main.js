function showProjectDetail(img, title, content){
    $('#modalTitle').html(title);
    $("#project-modal-img").attr('src', img);
    $("#modal-content-paragrapt").html(content);
    $('#projectModal').modal('show');
}


var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
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



wow.init();

$(document).ready(function(){
    $('#body').removeClass('d-none');
    $('#pageLoader').addClass('d-none');
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
	
    $(function(){
        $("#intro").typed({
            strings: ["Hello!", "I&#8217;m Raihan Kabir"],
            typeSpeed: 1,
        });
    });
});
