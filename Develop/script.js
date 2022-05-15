// Assignment code here
var charset = 123456789
var generateBtn = document.querySelector('#generate')
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var characters = '!@#$%^&*()-_=+{}[]'
var userPass = ""
var userLength= ""
var userUpper = ""
var userChar = ""
var userNum = ""


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
