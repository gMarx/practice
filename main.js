  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    console.log("Button clicked.");
    // if this works, can we move it to the page
    //  inside of HTML rather than console?
    var numberVictims = document.getElementById('vicCount').value;
    console.log("There are " + numberVictims + " victims");
    console.log(document.getElementById('vicName').value);
    console.log(document.getElementById('vicPhoneNum').value);
    console.log(document.getElementById('vicAddress').value);

    //push elements into div '#inputInfo'
    var inputVal = [];
    //inputVal.push(document.getElementById('vicCount').value);
    inputVal.push(document.getElementById('vicName').value);
    inputVal.push(document.getElementById('vicPhoneNum').value);
    inputVal.push(document.getElementById('vicAddress').value);
    
    for(var i = 0; i< inputVal.length; i++) {
   	    var input = document.getElementById('inputInfo');
	    var content = document.createTextNode(inputVal[i]+ "  ");
    	input.appendChild(content);
    }
  });


document.getElementById('vicCount').value;
document.getElementById('vicName').value;
document.getElementById('vicPhoneNum').value;
document.getElementById('vicAddress').value;
