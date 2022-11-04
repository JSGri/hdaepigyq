canavs=document.getElementbyID('my_canavs')
ctx=canavs.getcontext("2d")

greencar_width=75;
greeencar_heigth=100;
greencar_x=5;
greencar_y=225

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	background_imgtag=new Image();
	backgroung_imgtag.onload=uploadbackground;
	background_imgatag.src=background_image;

	greencar_imgtag=new image();
	greencar_imgtag.onlaod=uploadbackground;
	greencar_imgtag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawimage(backgroung_imgtag, 0, 0, canavs.width, canvas,height);

}

function uploadgreencar() {
	ctx.drawimage(greencar_imgtag, greencar_x, greencar_y, greencar_width, greencar_heigth)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0);
{
	greencar_y = greencar_y - 10;
	console.log("when up arrow key is pressed, x ="+ greencar_x +"| y =" +greencar_y);
	uploadbackground();
	uploadgreencar();
}
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
