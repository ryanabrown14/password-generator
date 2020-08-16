// Assignment code here
var passwordLength = window.prompt("How many characters would you like your password to be?");
if (passwordLength < 8 || passwordLength > 128){
  window.alert ("Your number of characters must be between 8 and 128.");
  passwordLength = window.prompt("How many characters would you like your password to be?");
}
var upperCase = window.confirm ("Would you like to use upercase?");
var lowerCase = window.confirm ("Would you liek to use lowercase?");
var number = window.confirm ("Would you like to use numbers?");
var symbol = window.confirm ("Would you like to use symbols?");
if (!upperCase && !lowerCase && !number && !symbol){
  window.alert("You must select one.");
  upperCase = window.confirm ("Would you like to use upercase?");
  lowerCase = window.confirm ("Would you liek to use lowercase?");
  number = window.confirm ("Would you like to use numbers?");
  symbol = window.confirm ("Would you like to use symbols?");

}



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
