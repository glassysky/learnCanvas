requirejs.config({
    //forbid cache
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'js',
    paths: {
        init: 'init'
    },
    shim: {

    }
});

requirejs(['init'],function(init){
    window.addEventListener("load",eventWindowLoaded,false);

    function eventWindowLoaded(){
        canvasApp();
    }
});