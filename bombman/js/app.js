requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'js',
    paths: {
        modernizr : 'lib/modernizr',
        init: 'init'
    },
    shim: {

    }
});

requirejs(['init','modernizr'],function(init){
    window.addEventListener("load",eventWindowLoaded,false);

    function eventWindowLoaded(){
        canvasApp();
    }
});