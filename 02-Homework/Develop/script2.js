// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = '0123456789';
  var special = '!#$%&()*@';
  var options = [];
  var pass ='';
  var length;
//Logic for Function
  
    length = parseInt(prompt("Choose a password length 8-128 characters"));
  }
  while(length < 8 || length > 128)
    Alert = ("Make sure to keep password between 8-128 characters")

  if(select = confirm("Lower Case?") ){
    options.push(lower);
  }

  if(select = confirm("Upper Case?")){
    options.push(upper);
  }

  if(select = confirm("Numbers?")){
    options.push(number);
  }

  if(select = confirm("Special Characeters?")){
    options.push(special);
  }

  for(i=0; i<options.length; i++){
    console.log("Enabled " + options[i])
  }
  
  for(i=0; i<length; i++){
    let x = Math.floor(Math.random()*options.length);
    let y = Math.floor(Math.random()*options[x].length);

    pass = pass + options[x][y];
  }

  return pass;

}
