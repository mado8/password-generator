// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById('password')

var lengthNum;
// 
var upperTrue;
var lowerTrue;
var symbolTrue;
var numberTrue;

var passwordArray = [];

//prompts type of characters included in password when button is clicked
function prompts() {
  const inputlength = prompt('How many characters would you like your password?', '16');
  //length of password
  if (inputlength == '' || inputlength == null){
    return;
  } else if (inputlength >= 129){
        alert('Too many characters. Try again.');
        return;
      } else if (inputlength <= 7){
            alert('Too short. A shorter password is less secure.');
            return;
          } else if (inputlength >= 8 && inputlength <= 128){
                lengthNum = inputlength;
                alert(`Your passcode will be ${inputlength} characters long.`);
              } else {
               alert('Please enter a valid number.');
                return;
              }

  const inputupper = prompt('Would you like to include uppercase letters in your password? Type yes or no.');  
  //option for uppercase letters
  if (inputupper == '' || inputupper == null){
    return;
  } else if (inputupper == "yes") {
        upperTrue = true;
        alert('Uppercase letters will be included in your password.');
      } else if (inputupper == "no") {
            alert('Uppercase letters will not be included.');
          } else {
              alert('Please enter yes or no.');
              return;
          }

  const inputlower = prompt('Would you like to include lowercase letters in your password? Type yes or no.');
  //option for lowercase letters
  if (inputlower == '' || inputlower == null){
    return;
  } else if (inputlower == "yes") {
        lowerTrue = true;
        alert('Lowercase letters will be included in your password.');
      } else if (inputlower == "no") {
            alert('Lowercase letters will not be included.');
          } else {
              alert('Please enter yes or no.');
              return;
          }

  const inputsymbol = prompt('Would you like to include symbols in your password? Type yes or no.');
  //option for inclusion of symbols  
  if (inputsymbol == '' || inputsymbol == null){
    return;
  } else if (inputsymbol == "yes") {
        symbolTrue = true;
        alert('Symbols will be included in your password.');
      } else if (inputsymbol == "no") {
            alert('Symbols will not be included.');
          } else {
              alert('Please enter yes or no.');
              return;
          }

  const inputnumber = prompt('Would you like to include numbers in your password? Type yes or no.');
  //option for inclusion of numbers
  if (inputnumber == '' || inputnumber == null){
    return;
  } else if (inputnumber == "yes") {
        numberTrue = true;
        alert('Numbers will be included in your password.');
      } else if (inputnumber == "no") {
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

// lowercase, uppercase, number, and symbol array.
var functionArray = [];

function pushArray() {
  if (upperTrue === true) {
    functionArray.push(randomUpper);
  }
  if (lowerTrue === true) {
    functionArray.push(randomLower);
  }
  if (symbolTrue === true) {
    functionArray.push(randomSymbol);
  }
  if (numberTrue === true) {
    functionArray.push(randomNumber);
  }
}

// add event listener to button to run prompts function
generateBtn.addEventListener('click', function() {

  upperTrue = false;
  lowerTrue = false;
  symbolTrue = false;
  numberTrue = false;

  lengthNum = 0;
  passwordArray = [];
  functionArray = [];

  prompts();
  pushArray();

  console.log(functionArray)

  for (let i = 0; i < lengthNum; i++) {
    var randomFunc = functionArray[Math.floor(Math.random() * functionArray.length)]();
    passwordArray.push(randomFunc);
    console.log(passwordArray);
  }
  
})

