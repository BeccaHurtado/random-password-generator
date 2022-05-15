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

var userPasswordChoices = function () {

var userLowerCaseConfirm = confirm("Would you like lowercase letters?")
  if(userLowerCaseConfirm === true) {
    userPass += lowerCase 
  }

var userUpperCaseConfirm = confirm("Would you like lowercase letters?")
  if(userUpperCaseConfirm === true) {
    userPass += upperCase 
  }

var userSpecialCharactersConfirm = confirm("Would you like lowercase letters?")
  if(userSpecialCharactersConfirm === true) {
    userPass += characters 
  }

var userNumbersConfirm = confirm("Would you like lowercase letters?")
  if(userNumbersConfirm === true) {
    userPass += numbers 
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
