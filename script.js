// Assignment code here

//characters available for passwords 
var special = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var confirmlength;
var confirmspecial;
var confirmnumeric;
var confirmlower;
var confirmupper;
var choices;

//Prompt user for number of characters 8min 128max characters
function generatePassword(){
  confirmlength = window.prompt("How many characters would you like your password to contain? Please type a number from 8 to 128");
  console.log(confirmlength);

  while (confirmlength < 8 || confirmlength >128) {
    window.alert("Password must be between 8 and 128 characters! Try again!")
    generatePassword()
  }

  confirmspecial = window.confirm("Would you like to use special charachters? ie. %, $, &")

  confirmnumeric = window.confirm("Would you like to use numerical values?")

  confirmlower = window.confirm("Would you like to use lower case letters?")

  confirmupper = window.confirm("Would you like to use UPPER CASE letters?")

    if (!confirmupper && !confirmlower && !confirmnumeric && !confirmspecial) {
      choices = window.alert("You must choose a criteria!")
    }
    else if (confirmlower && confirmupper && confirmnumeric && confirmspecial) {
      choices = (lower, upper, numeric, special);
    }
    else if (confirmlower && confirmupper && confirmnumeric) {
      choices = (lower, upper, numeric);
    }
    else if (confirmlower && confirmupper && confirmspecial) {
      choices = (lower, upper, special);
    }
    else if (confirmlower && confirmnumeric && confirmspecial) {
      choices = (lower, numeric, special);
    }
    else if (confirmupper && confirmnumeric && confirmspecial) {
      choices = (upper, numeric, special);
    }
    else if (confirmlower && confirmupper) {
      choices = (lower, upper);
    }
    else if (confirmlower && confirmnumeric) {
      choices = (lower, numeric);
    }
    else if (confirmlower && confirmspecial) {
      choices = (lower, special);
    }
    else if (confirmupper && confirmnumeric) {
      choices = (upper, numeric);
    }
    else if (confirmupper && confirmspecial) {
      choices = (upper, special);
    }
    else if (confirmnumeric && confirmspecial) {
      choices = (numeric, special);
    }
    else if (confirmlower) {
      choices = lower;
    }
    else if (confirmupper) {
      choices = blankUpper.concat(upper);
    }
    else if (confirmnumeric) {
      choices = numeric;
    }
    else if (confirmspecial) {
      choices = special;
    };
    
    var passwordBlank = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChoices = choices[Math.floor(Math.random() * choices.length)];
      passwordBlank.push(allChoices);

    var password = passwordBlank.join("");
    console.log("Your Pasword is: " + password);
    return password;
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
 