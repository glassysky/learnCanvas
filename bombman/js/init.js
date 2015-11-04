define(function(){
	return {
		test : function(){
			window.addEventListener("load" ,this.canvasApp, false);
		},
		canvasApp : function(){
			console.log(1);
		}
	};
});