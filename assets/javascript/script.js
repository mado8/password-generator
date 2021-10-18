// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById('password')

//prompts type of characters included in password when button is clicked
function prompts() {
  const inputlength = prompt('How many characters would you like your password?', '16');
  //length of password
  if (inputlength == '' || inputlength == null){
    alert('Please enter a value to continue.');
  } else if (inputlength >= 129){
        alert('Too many characters. Try again.');
        return;
      } else if (inputlength <= 7){
            alert('Too short. A shorter password is less secure.');
            return;
          } else if (inputlength >= 8 && inputlength <= 128){
                alert(`Your passcode will be ${inputlength} characters long.`);
              } else {
               alert('Please enter a valid number.');
                return;
              }

  const inputupper = prompt('Would you like to include uppercase letters in your password? Type yes or no.');  
  //option for uppercase letters
      if (inputupper == "yes") {
        alert('Uppercase letters will be included in your password.');
      } else 
          if (inputupper == "no") {
            alert('Uppercase letters will not be included.');
          } else {
              alert('Please enter yes or no.');
              return;
          }

  const inputlower = prompt('Would you like to include lowercase letters in your password? Type yes or no.');
  //option for lowercase letters
      if (inputlower == "yes") {
        alert('Lowercase letters will be included in your password.');
      } else 
          if (inputlower == "no") {
            alert('Lowercase letters will not be included.');
          } else {
              alert('Please enter yes or no.');
              return;
          }

  const inputsymbol = prompt('Would you like to include symbols in your password? Type yes or no.');
  //option for inclusion of symbols  
      if (inputsymbol == "yes") {
        alert('Symbols will be included in your password.');
      } else 
          if (inputsymbol == "no") {
            alert('Symbols will not be included.');
          } else {
              alert('Please enter yes or no.');
              return;
          }

  const inputnumber = prompt('Would you like to include numbers in your password? Type yes or no.');
  //option for inclusion of numbers
      if (inputnumber == "yes") {
        alert('Numbers will be included in your password.');
      } else 
          if (inputnumber == "no") {
            alert('Numbers will not be included.');
          } else {
              alert('Please enter yes or no.');
              return;
          }

  //if all options have been selected to not be included, this message will display
  if (inputupper == "no" && inputlower == "no" && inputsymbol == "no" && inputnumber == "no") {
    alert('You must select yes for at least one option.')
    return;
  }      
};

//defines random character functions
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
}

function randomSymbol() {
  var symbols = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~\\';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// add event listener to button to run prompts function
generateBtn.addEventListener('click', function() {
  prompts();
})

//uses defined random character functions to generate a string of x length


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
