var matches = document.querySelectorAll("p");
for(i = 0; i<matches.length; i++){
  matches[i].innerHTML = matches[i].innerHTML.split(" C ").join(" <b style = 'color: #19aeff'> C </b> ");
  matches[i].innerHTML = matches[i].innerHTML.split(" C.").join(" <b style = 'color: #19aeff'> C</b>. ");
  matches[i].innerHTML = matches[i].innerHTML.split(" C,").join(" <b style = 'color: #19aeff'> C</b>, ");
  matches[i].innerHTML = matches[i].innerHTML.split(" B ").join(" <b style = 'color: #ff6600'> B </b> ");
  matches[i].innerHTML = matches[i].innerHTML.split(" B.").join(" <b style = 'color: #ff6600'> B</b>. ");
  matches[i].innerHTML = matches[i].innerHTML.split(" B,").join(" <b style = 'color: #ff6600'> B</b>, ");
  matches[i].innerHTML = matches[i].innerHTML.split(" A ").join(" <b style = 'color: #ffc022'> A </b> ");
  matches[i].innerHTML = matches[i].innerHTML.split(" A.").join(" <b style = 'color: #ffc022'> A</b>.");
  matches[i].innerHTML = matches[i].innerHTML.split(" A,").join(" <b style = 'color: #ffc022'> A</b>, ");
  
}

function displayNextImage() {
    //cycle of 2
    x = (x === images[0].length - 1) ? 0 : x + 1;
    document.getElementById("unanimity").src = images[0][x];
    document.getElementById("IIA").src = images[1][x];
    document.getElementById("bbottom_switch").src = images[3][x];
    document.getElementById("coollogic").src = images[4][x];
  
    //cycle of 4
    y = (y === images[2].length - 1) ? 0 : y + 1;
    document.getElementById("bbottom").src = images[2][y];
  }
  
  function startTimer() {
    setInterval(displayNextImage, 1000);
  }
  
  var images = [[],[],[],[],[]], x = -1; y = -1;
  images[0][0] = "images/unanimity0.png";
  images[0][1] = "images/unanimity1.png";
  
  images[1][0] = "images/newIIA.png";
  images[1][1] = "images/newIIA2.png";
  
  images[2][0] = "images/bbottom.png";
  images[2][1] = "images/bbottom1.png";
  images[2][2] = "images/bbottom2.png";
  images[2][3] = "images/bbottom3.png";
  
  images[3][0] = "images/bbottom2.png";
  images[3][1] = "images/bbottom3.png";
  
  images[4][0] = "images/criticalmoment1.png";
  images[4][1] = "images/criticalmoment3.png";
  

  