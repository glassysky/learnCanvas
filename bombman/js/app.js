requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'js',
    paths: {
        jquery : 'lib/jquery.min',
        modernizr : 'lib/modernizr',
        init : 'init',
        render : 'render'
    },
    shim: {
        
    }
});

requirejs(['jquery','init','render','modernizr'],function($,init,render){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    $(window).ready(init.createCanvas(canvas,512));
    // 渲染
    render.draw(ctx,16);
});