<!--
var image1=new Image()
image1.src="IMG_2211.JPG"
var image2=new Image()
image2.src="IMG_2221.JPG"
var image3=new Image()
image3.src="IMG_2215.JPG"
var image4=new Image()
image4.src="IMG_2223.JPG"
var image5=new Image()
image5.src="IMG_2225.JPG"
var image6=new Image()
image6.src="IMG_2227.JPG"
var image7=new Image()
image7.src="IMG_2238.JPG"
var image8=new Image()
image8.src="IMG_2241.JPG"
//-->

<!--
				//variable that will increment through the images
			var step=1
			function slideit(){
			//if browser does not support the image object, exit.
			if (!document.images)
				return
				document.images.slide.src=eval("image"+step+".src")
			if (step<8)
				step++
			else
				step=1
			//call function "slideit()" every 5 seconds
			setTimeout("slideit()",4000)
			}
			slideit()
			//-->