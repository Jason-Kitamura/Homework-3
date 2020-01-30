// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", writePassword);

// checkbox
var letterCase = document.querySelector('#button1');
var upperCase = document.querySelector('#button2');
var numberCase = document.querySelector('#button3')
var specialCase = document.querySelector('#button4');

var finalString = "";
var finalPass = "";

//global variables made from inside infoPrompt()
var passLength
var passNumber

// Prompt function for character length of password
infoPrompt();
function infoPrompt () {

passLength = prompt('How many characters would you like your password to be (8-128)') 
passNumber = Number(passLength)

// if character length is not 8-128, users receives alert and function restarts
if (passNumber <8 || passNumber >128) {
  alert('Please enter a valid character length');
  infoPrompt();
}

// if user entered NAN, user receives alert and function restarts
if (isNaN(passNumber)) {
  alert('Please enter a number');
  infoPrompt();
  }
}

// function to write password based on checkboxes and character length input
function writePassword() {

    // creating array of characters for each check box
var letter = "abcdefghijklmnopqrstuvwxyz";
var letterU = letter.toUpperCase();
var number = "1234567890";
var special = "!@#$%^&*()";

// creating if statements for checked boxes. If none are checked, an alert pops and the function is exited
  if (letterCase.checked==false && upperCase.checked==false && numberCase.checked==false && specialCase.checked==false) {
    alert('Please check (atleast 1) type of character to use');
    return;
  }

// if checkbox is checked, adds array to final string and creates a final array of characters
  if (letterCase.checked) {
    finalString += letter;
  } 
  if (upperCase.checked) {
    finalString += letterU;
  } 
  if (numberCase.checked) {
    finalString += number;
  } 
  if (specialCase.checked) {
    finalString += special;
  }

// for loop to grab random character from finalString and add it to the final password (finalPass). Loop repeats for the number the user entered in the prompt at the start
  for (i=0; i < passNumber; i++) {
    finalPass = finalPass+finalString[Math.floor(Math.random() * finalString.length)];
 
  }
//   pastes finalPass into password box
  passwordText.value = finalPass;
}
