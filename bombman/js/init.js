define(['jquery'],function($){
	return {
		test : function(){
			console.log("test");
		},
		canvasApp : function(){
			console.log(1);
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
		// 设置单元格信息
		setCell : function(num){
			var cellInfo = {};
			cellInfo.side = $("canvas").width(),
			cellInfo.cellNum = num,
			cellInfo.cellLength = Math.floor(parseInt(cellInfo.side)/parseInt(cellInfo.cellNum)),
			cellInfo.cellGap = (parseInt(cellInfo.side)%parseInt(cellInfo.cellLength))/(parseInt(cellInfo.cellNum)+1);
			return cellInfo;
		}
	};
});