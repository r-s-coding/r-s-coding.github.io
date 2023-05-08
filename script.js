$(document).ready(function () {
    // Retrieve last clicked link from localStorage
    var lastClickedLink = localStorage.getItem('lastClickedLink');

    // Set active class on last clicked link
    if (lastClickedLink) {
        $('#home-link').removeClass('active');
        $('a.nav-link[href="' + lastClickedLink + '"]').addClass('active');
    }

    // Set active class on clicked link and store it in localStorage
    $('a.nav-link').click(function () {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
        localStorage.setItem('lastClickedLink', $(this).attr('href'));

        var target = $(this).attr('href').substring($(this).attr('href').indexOf('#'));
        console.log(target);
        var targetElem = $(target);
        console.log(targetElem);

        if (targetElem.length) {
            $('html, body').animate({
                scrollTop: targetElem.offset().top - $('.navbar').outerHeight()
            }, 500);
        }

        $('.navbar-collapse').collapse('hide');
    });

    // Submit form and reset after a delay
    $("#contact-form").submit(function (e) {
        // Wait for 3 seconds before resetting the form
        setTimeout(function () {
            $("#contact-form")[0].reset();
        }, 3000);
    });
});
