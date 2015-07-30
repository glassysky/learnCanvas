#Canvas 基础入门
###学习之前你需要掌握的
- html,css,js基础
- 一定的英文功底（或者有耐心百度）

###1.The rendering context
```javascript
var convas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```
###2.Checking for support
```javascript
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  //drawing code
} else {
  //canvas-unsupported code
}
```
###3.A skeleton template
```html
<!DOCTYPE html>
<html> 
  <head> 
    <meta charset="utf-8"/> 
    <title>Canvas tutorial</title> 
    <script type="text/javascript"> 
      function draw(){ 
        var canvas = document.getElementById('tutorial'); 
        if (canvas.getContext){ 
          var ctx = canvas.getContext('2d'); 
        } 
      } 
      </script> 
      <style type="text/css"> 
        canvas { border: 1px solid black; } 
      </style> 
  </head> 
  <body onload="draw();"> 
    <canvas id="tutorial" width="150" height="150"></canvas> 
  </body>
</html>
```
###4.A simple example
```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```
