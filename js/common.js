$("body").prognroll({
    height: 5, //Progress bar height
    color: "#2B2B2B", //Progress bar background color
    custom: false //If you make it true, you can add your custom div and see it's scroll progress on the page
});

/* sweetScroll load */
document.addEventListener('DOMContentLoaded', () => {
    const scroller = new SweetScroll({ duration: 1000, });
}, false);

/* particlesJS */

window.onload = function() {
    Particles.init({
        selector: '.background',
        color: ['#DA0463', '#404B69', '#DBEDF3'],
        maxParticles: 100,
        connectParticles: true,
        responsive: [{
            breakpoint: 768,
            options: {
                maxParticles: 70,
                connectParticles: false,
            }
        }, {
            breakpoint: 425,
            options: {
                maxParticles: 0
            }
        }]
    });
};

/* carousel */

$('.carousel').carousel({
    interval: 8000,
    pause: "hover",
})

/* MENU */
var $page = $('.page');

$('.menu_toggle').on('click', function() {
    $page.toggleClass('shazam');
});

$('.content').on('click', function() {
    $page.removeClass('shazam');
});