function upDate(previewPic){

  var img=document.getElementById("image");
  img.style.backgroundImage= "url(' "+previewPic.src+" ')" ;
  document.getElementById("image").innerHTML=previewPic.alt;
}  
	
function unDo(){


 var img=document.getElementById("image");
 img.style.backgroundImage="url('')";
 document.getElementById("image").innerHTML="Hover over an image below to display here";	
	}