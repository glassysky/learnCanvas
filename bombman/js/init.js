define(function(){
	return {
		test : function(){
			console.log("test");
			this.canvasApp();
			window.addEventListener("load" ,this.canvasApp, false);
		},
		canvasApp : function(){
			console.log(1);
		}
	};
});