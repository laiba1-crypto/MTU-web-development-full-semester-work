      
        // Here the value is stored in new variable x 
        function myFunction() {
            var x = document.getElementById("avenger").value;
            document.getElementById("avenge").innerHTML = x;
        }
        function myFunc() 
	{
  		
			imgArray = new Array();
			imgArray[0] = "images/Hulk.jpg";
			imgArray[1] = "images/IronMan.jpg";
			imgArray[2] = "images/DrStrange.jpg";
			imgArray[3] = "images/CaptainAmerica.jpg";

			document.getElementById("select").onclick = myFunc;
			randomN = Math.floor(Math.random()*3);

			alert(randomN);
      document.picture.src = imgArray[randomN];
      
      if(randomN == 1)
      {
      		hideMe();
      		document.getElementById("content1").style.display = "block";
          
      }else if(randomN == 2)
      {
        	hideMe();
      		document.getElementById("content2").style.display = "block";
  
      }else if(randomN == 3)
      {
      		hideMe();
      		document.getElementById("content3").style.display = "block";

      }else{
      		hideMe();
      		document.getElementById("content").style.display = "block";
      }
	}  
  
  
function hideMe()
{
	var divs = document.getElementById('container').children;
	for (var i = 0; i < divs.length; i++) 
  {
    if (divs[i].tagName == "DIV") {   
        divs[i].style.display = 'none';
    }
	}
}