function clearFormData() {
    $('#name').val('');
    $('#email').val('');
    $('#company').val('');
    $('#budget').val('');
    $('#website').val('');
    $('#description').val('');
}

function getFormData() {
    return form_data = {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'company': $('#company').val(),
            'budget': $('#budget').val(),
            'website': $('#website').val(),
            'description': $('#description').val()
        }
}

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


$('#scrollToHireMe').click(function(e){
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
    
    var checked = false;
    var br_location = '';
    
    if ("geolocation" in navigator ) {
        navigator.geolocation.getCurrentPosition(
            function success(position) {
                br_location = position.coords.latitude + ', ' + position.coords.longitude;
            },
        );

        if ( !checked ) {
            $.get("http://ipinfo.io", function(response) {
                var user = response;
                $.ajax({
                    url: "https://myportfoliobackend.herokuapp.com/api/traffics/create",
                    method: 'POST',
                    data: {
                        ip: user.ip,
                        city: user.city,
                        country: user.country,
                        location: br_location,
                        agent: window.navigator.userAgent,
                        d_height: $(window).innerHeight(),
                        d_width: $(window).innerWidth()
                    },
                    success: function(response) {
                        checked = true;
                        console.log('welcome to rk4bir.github.io')
                    },
                    error: function() {
                        console.log('welcome to rk4bir.github.io')
                    }
                });
            }, "jsonp");
        }
    }

   
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

    $('#form-submit-btn').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://myportfoliobackend.herokuapp.com/api/hirings/create",
            method: 'POST',
            data: getFormData(),
            success: function(response) {
                if (response.status == 'success') {
                    clearFormData();
                    $('#form-error').fadeOut().addClass('text-success').html("<strong style='text-transform: uppercase'>" + response.status + ": </strong>" + response.message).fadeIn();
                } else {
                    $('#form-error').fadeOut().removeClass('text-success').html("<strong style='text-transform: uppercase'>" + response.status + ": </strong>" + response.message).fadeIn();
                }
            },
            error: function(response) {
                alert("Couldn't proceed! Something went wrong.")
            }
        });
        window.location.href = "#form-header";
    })
});
