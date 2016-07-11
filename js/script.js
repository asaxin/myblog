(function (global) {

var close = $('.nav-close, .nav-cover, .menu-button');
var rightMenu = $('.right-menu');
var menuBtn = $('.menu-button');
var menuword = $('.word');
var $window = $(global);

close.on('click', 
    function (e){ 
        rightMenu.css('width', '240px');
        e.preventDefault();
        $('body').toggleClass("nav-opened nav-closed");
    });

})(window);
