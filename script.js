// websites i used to help me and videos
// https://stackoverflow.com/questions/42112489/randomizing-char-array-to-display-random-password
// https://www.youtube.com/watch?v=duNmhKgtcsI&t=1678s
// https://www.youtube.com/watch?v=i6cX05cyIgc
// https://www.youtube.com/watch?v=dB3p1sHWPNY
// https://www.youtube.com/watch?v=fOvYE1i_IiY
// https://www.youtube.com/watch?v=iKo9pDKKHnc&t=1420s
// https://www.w3schools.com/jsref/jsref_concat_string.asp
// 
// 
// 
// 
// 
// 
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var resultArray = [];
var userArray = [];

uppercaseArray [1]


  var numCharacter = prompt ("Character amount must be between 8 and 128?");
  var numbers = confirm ("do you want numbers?");
  var uppercases = confirm ("do you want Uppercase letters?");
  var lowercases = confirm ("do you want lowercase letters?");
  var characters = confirm ("do you want special characters?");


// write if conditions

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)

// write for loop
for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the password spot
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);