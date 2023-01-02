var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent="";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft
    current_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.arc(current_x, current_y, 20, 0, 2*Math.PI)
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y
}