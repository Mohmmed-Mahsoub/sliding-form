/*global $, alert, console*/

$(function () {

    'use strict';
    
    // trigger nice scroll
    
    $("html").niceScroll({
        /*
        cursorcolor: "",
        cursorwidth: "",
        cursorborder: ""
        */
    });

    // swich case

    $(".signUp-show button").click(function() {
        $("body").removeClass().addClass("secondary-case");
    })

    $(".signIn-show button").click(function() {
        $("body").removeClass().addClass("primary-case");
    })
});