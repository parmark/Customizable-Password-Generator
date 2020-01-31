// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// A toUpperCase function that can be used on arrays.
toUpper = function(x){ 
  return x.toUpperCase();
};

// Arrays for the possible characters to be used in a password are first made as string and then, using the split function, made into arrays.
var alphabetSource = "abcdefghijklmnopqrstuvwxyz";
var alphabet = alphabetSource.split("");

var numListSource = "0123456789";
var numList = numListSource.split("");

// The following characters are not included: " and \
var specialCharListSource = " !#$%&'()*+,-/:;<=>?@[]^_`{|}~";
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
  if (useLowerCase === true) {
    passwordCharSource = passwordCharSource.concat(alphabet);
  }
  if (useUpperCase === true) {
    passwordCharSource = passwordCharSource.concat(alphabet.map(toUpper));
  }
  if (useNumeric === true) {
    passwordCharSource = passwordCharSource.concat(numList);
  }
  if (useSpecial === true) {
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
