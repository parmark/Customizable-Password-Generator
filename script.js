// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var noTypeChosen = true;
  while (noTypeChosen)  {
    var lowercaseAnswer = confirm("Would you like your password to include lowercase letters?");
    var uppercaseAnswer = confirm("Would you like your password to include uppercase letters?");
    var numericAnswer = confirm("Would you like your password to include numbers?");
    var specialAnswer = confirm("Would you like your password to include special characters?");

    if (lowercaseAnswer || uppercaseAnswer || numericAnswer || specialAnswer) {
      var noTypeChosen = false
    }
    else {
      alert("Please choose at at least one character type!")
    }
  }

  var noLengthChosen = true;
  // The user will be promted for a password character length until valid input is given.
  // Valid input meaning an integer greater than 7 and less than 129
  while (noLengthChosen) {
    length = prompt("How many characters would you like in your password?\n(Minimum: 8, Maximum:128)")
    if (length > 7 && length < 129 && Number.isInteger(+length)) {
      var noLengthChosen = false;
    }
    else {
      alert("Please choose a length in the specified range!")
    }
  }

  var password = generatePassword(length, lowercaseAnswer, uppercaseAnswer, numericAnswer, specialAnswer);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// A toUpperCase function that can be used on arrays.
toUpper = function(x){ 
  return x.toUpperCase();
};

var string = "&quot;"

// Arrays for the possible characters to be used in a password are first made as string and then, using the split function, made into arrays.
var alphabetSource = "abcdefghijklmnopqrstuvwxyz";
var alphabet = alphabetSource.split("");

var numListSource = "0123456789";
var numList = numListSource.split("");

var specialCharListSource = " !#$%&'()*+,-/:;<=>?@[]^_`{|}~\"\\";
var specialCharList = specialCharListSource.split("");


// Generates a password with the following properties:
//  - a specified length between 8 and 128 characters inclusively
//  - a specified combination of lowercase, uppercase, numeric, and/or special characters
function generatePassword(length, useLowerCase, useUpperCase, useNumeric, useSpecial) {

  //if (length > 128 || length < 8) {
  //  return "Invalid length"
  //}

  // An empty array (password) is created to eventually receive randomly selected characters from passwordCharSource (the second empty array).
  var password =[];
  var passwordCharSource = [];

  // These if statements will fill the passwordCharSource array with the user-specified charactersets.
  if (useLowerCase) {
    passwordCharSource = passwordCharSource.concat(alphabet);
  }
  if (useUpperCase) {
    passwordCharSource = passwordCharSource.concat(alphabet.map(toUpper));
  }
  if (useNumeric) {
    passwordCharSource = passwordCharSource.concat(numList);
  }
  if (useSpecial) {
    passwordCharSource = passwordCharSource.concat(specialCharList);
  }

  for (var i = 0; i < length; i++) {

    password.push(passwordCharSource[Math.floor(Math.random() * passwordCharSource.length)]);

  }

  return password.join("");
}

console.log(generatePassword(20, true, true, true, true))

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
