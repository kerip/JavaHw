// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", makePassword);

function makePasswd() {
    var password = '';
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (i=1;i<8;i++) {
      var c = Math.floor(Math.random()*chars.length + 1);
      passwd += chars.charAt(c)
    }
  
    return password;
  
  }
