define(['init'],function(init){
	return {
		test : function(){
			console.log($("canvas").height());
		},
		draw : function(ctx,num){
			var cellInfo = init.setCell(num);

			drawGround();
			drawGrass();
			drawPlayer();

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
			function drawPlayer(){
				var playerImg1 = new Image();
				var playerImg1Ready = false;
				playerImg1.onload = function(){
					playerImg1Ready = true;
					ctx.drawImage(playerImg1,0,0,103.8,103.75,1,1,
						cellInfo.cellLength-2,cellInfo.cellLength-2);
				}
				playerImg1.src = "images/sprite.gif";
			}
		}
	};
});