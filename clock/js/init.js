define(['jquery'],function($){
	return {
		test : function(){
			console.log("test");
		},
		//在节点中添加CANVAS
		createCanvas : function(canvas,width,height){
			
			if(height){
				canvas.width = width;
				canvas.height = height;
			} else {
				canvas.width = width;
				canvas.height = width;
			}
			document.body.appendChild(canvas);
		},
	};
});