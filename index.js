$(document).ready(function () {
    // Navbar toggler and close button
    $(".navbar-toggler").click(() => $(".navbar-nav").toggleClass("active"));
    $(".btn-nav-close").click(() => $(".navbar-nav").removeClass("active"));

    // Add icon to nav-item with a dropdown
    $(".nav-item").has(".dropdown").addClass("icon");

    // Phone input logic
    if ($("#phoneInput").length) console.log("Phone input detected.");

    // Mobile menu toggle**
    $("#hamburger").click(() => $("#mobile-menu").toggleClass("hidden"));

    // Dropdown toggle and close logic
    $(".dropdown-toggle").click(function () {
        const targetDropdown = $(this).next(".dropdown");
        targetDropdown.toggleClass("hidden");
        $(this).find("i").toggleClass("fa-sort-down fa-sort-up");
    });
    $(".dropdown a").click(function () {
        $(this).closest(".dropdown").addClass("hidden");
        $(this).closest("button").find("i").toggleClass("fa-sort-down fa-sort-up");
    });

    // GAllery Section ****
    // Initialize Fancybox with custom options
    $('[data-fancybox="gallery"]').fancybox({
        infinite: false, // Disable infinite scrolling
        clickOutside: "close", // Closes the image when clicking outside
        dragToClose: false, // Disable drag to close
        image: {
            zoom: false // Disable image zoom
        }
    });
});


// Form Validation - Captcha code generator
$(function () {
    // Captcha code generator
    const captchaCode = Array.from({ length: 6 }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 62)]).join('');
    $('#captcha-text').text(captchaCode);
    window.generatedCaptcha = captchaCode;
    // Form submission validation
    $('#contact-form').on('submit', function (e) {
        const userCaptcha = $('#captcha').val();
        if (userCaptcha !== window.generatedCaptcha) {
            e.preventDefault();
            alert('Captcha is incorrect.');
        }
    });
});
