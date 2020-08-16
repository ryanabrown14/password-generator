// Assignment code here
function generatePassword (){
var passwordLengthConfirm = window.prompt("How many characters would you like your password to be? It must be between 8 and 128.");
if (passwordLengthConfirm < 8 || passwordLengthConfirm > 128){
  window.alert ("Your number of characters must be between 8 and 128.");
  passwordLengthConfirm = window.prompt("How many characters would you like your password to be?");
}

var upperCaseConfirm = window.confirm ("Would you like to use upercase letters?");
var lowerCaseConfirm = window.confirm ("Would you like to use lowercase letters?");
var numberConfirm = window.confirm ("Would you like to use numbers?");
var symbolConfirm = window.confirm ("Would you like to use symbols?");
if (!upperCaseConfirm && !lowerCaseConfirm && !numberConfirm && !symbolConfirm){
  window.alert("You must select one.");
  upperCaseConfirm = window.confirm ("Would you like to use upercase?");
  lowerCaseConfirm = window.confirm ("Would you like to use lowercase?");
  numberConfirm = window.confirm ("Would you like to use numbers?");
  symbolConfirm = window.confirm ("Would you like to use symbols?");

}

var passwordChar = []
if (upperCaseConfirm){
  passwordChar= //need a link of some sort
}
if (lowerCaseConfirm) {
  passwordChar= //need link

}
if (numberConfirm){
  passwordChar= //need link
}
if (symbolConfirm){
  passwordChar = //need link 
}
};

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
