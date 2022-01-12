



var header = document.createElement('p');

changeColor();


function changeColor () {
    var imgTab;
    if (document.body.style.border === "20px solid purple"){
     
     document.body.style.border = "20px solid red";
     document.body.style.fontWeight = "bold";
     document.body.style.fontStyle = "normal";
     header.textContent = "Couleur rouge";
     document.body.appendChild(header);
     imgTab = document.getElementsByTagName('img');
     for (s in imgTab) {
     imgTab[s].src ="data:image/png;base64,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"
    }
    }
    else{
    
    document.body.style.border = "20px solid purple";
    document.body.style.fontWeight = "normal";
    document.body.style.fontStyle = "italic";
    header.textContent = "Couleur violette";
    document.body.appendChild(header);
    imgTab = document.getElementsByTagName('img');
     for (s in imgTab) {
     imgTab[s].src ="data:image/jpeg;base64,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"
    }
   }
   
   
   }