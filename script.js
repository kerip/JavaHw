// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCasedigit = "abcdefghijklmnopqrstuvwxyz",
    upperCasedigit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numericDigit = "123456789",
    symbolDigit = "~!#$%^&*()_<>?"

    password = "";

javascript:(

function(){
    prompt("Your Password")
        Math.random().toString(36).slice(2) +
        Math.random().toString(36).slice(2)
    );

}