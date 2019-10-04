function clearFormData() {
    $("#name").val("");
    $("#email").val("");
    $("#company").val("");
    $("#budget").val("");
    $("#website").val("");
    $("#description").val("");
}


function getFormData() {
    return form_data = {
        name: $("#name").val(),
        email: $("#email").val(),
        company: $("#company").val(),
        budget: $("#budget").val(),
        website: $("#website").val(),
        description: $("#description").val()
    }
}


function say_hello() {
    $("#intro").typed({
        strings: ["Hello!", "I&#8217;m Raihan Kabir"],
        typeSpeed: 10,
        backSpeed: 0,
        showCursor: 1,
        cursorChar: "",
        fadeOut: 0,
        fadeOutDelay: 400,
        backDelay: 600,
        startDelay: 1e3,
        loop: 0,
        loopCount: 1
    })
}


var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: 0,
    live: 1,
    scrollContainer: null,
    resetAnimation: 0
});

wow.init();

$("#scrollToHireMe").click(function(t) {
    if (t.preventDefault(), location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var o = $(this.hash);
        if ((o = o.length ? o : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({
            scrollTop: o.offset().top
        }, 1500, "easeInOutExpo"), !1
    }
})

$(document).ready(function() {
  

    $("<img/>").attr("src", "https://rk4bir.github.io/assets/img/cover.png").on("load", function() {
        $(this).remove();
        $("#loader").fadeOut();
    })

    say_hello();


    $("#form-submit-btn").click(function(t) {
        t.preventDefault();
        $.ajax({
            url: "https://rk4bir-github-io-backend.herokuapp.com/api/hirings/create",
            method: "POST",
            data: getFormData(),
            success: function(response) {
            	message = "<strong style='text-transform: uppercase'>" + response.status + ": </strong>" + response.message;
                if ( response.status == "success" ) {
                	clearFormData(); 
                	$("#form-error").fadeOut().addClass("text-success").html(message).fadeIn(); 
                } else {
                	$("#form-error").fadeOut().removeClass("text-success").html(message).fadeIn();
            	}
            },
            error: function() {
                alert("Couldn't proceed! Something went wrong.");
            }
        });
        window.location.href = "#form-header";
    })
});
