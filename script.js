// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";


var criteria = prompt("How many characters will your password include? Choose between 8-128 characters.");

if (criteria >8) {
    alert ("Your number (" + criteria + ") is matches requirements", "");
}    else if (criteria <8) {
    prompt ("Your number (" + criteria + ") does not match requirements. Please choose a number between 8-128.", "");

}



    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
