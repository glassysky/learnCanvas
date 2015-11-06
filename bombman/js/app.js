requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'js',
    paths: {
        modernizr : 'lib/modernizr',
        init : 'init'
    },
    shim: {
        init : 'init'
    }
});

requirejs(['init','modernizr'],function(init){
    window.addEventListener("load" ,init.canvasApp, false);
});