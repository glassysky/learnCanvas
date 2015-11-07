requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'js',
    paths: {
        jquery : 'lib/jquery.min',
        modernizr : 'lib/modernizr',
        init : 'init',
        render : 'render',
        update : 'update'
    },
    shim: {
        
    }
});

requirejs(['jquery','init','render','modernizr'],function($,init,render){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    $(window).ready(init.createCanvas(canvas,512));

    init.test();
});