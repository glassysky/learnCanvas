define(['init'],function(init){
	return {
		test : function(){
			console.log($("canvas").height());
		},
		draw : function(ctx,num){
			var cellInfo = init.setCell(num);
			drawGround();
			drawGrass();
			function drawGround(){
				 console.log(cellInfo);
				 for(var i = 0;i<=cellInfo.cellNum;i++){
				 	for(var j = 0;j<=cellInfo.cellNum;j++){
				 		ctx.fillRect(j*cellInfo.cellGap+(j-1)*cellInfo.cellLength,
				 			i*cellInfo.cellGap+(i-1)*cellInfo.cellLength,
				 			cellInfo.cellLength,cellInfo.cellLength);
				 	}
				 }
			}
			function drawGrass(){
				var grass = new Image();
				var grassReady = false;
				grass.onload = function(){
					grassReady = true;
					for(var i = 0;i<=cellInfo.cellNum;i++){
						for(var j = 0;j<=cellInfo.cellNum;j++){
							ctx.drawImage(grass,j*cellInfo.cellGap+(j-1)*cellInfo.cellLength+1,
				 				i*cellInfo.cellGap+(i-1)*cellInfo.cellLength+1,
				 				cellInfo.cellLength-2,cellInfo.cellLength-2);
						}
					}
				}
				grass.src = "images/background.jpg";
			}
		}
	};
});