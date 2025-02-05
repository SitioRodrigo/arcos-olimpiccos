canvas = document.getElementById("mycanvas");
ctx= canvas.getcontext("2d");
 
ctx.beginpath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "blue";
ctx.linewidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginpath();
ctx.strokeStyle = "black";
ctx.linewidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "red";
ctx.linewidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "orange";
ctx.linewidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "green";
ctx.linewidth = 5;
ctx.arc(500, 250, 40, 0, 2 * Math.PI);
ctx.stroke();