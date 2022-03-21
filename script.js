// Assignment code here
function getRandomLower() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)]
}

function getRandomNumber() {
  var number = '0123456789';
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
  var symbol = '!@#$%^&*()+{}[]?<>';
  return symbol[Math.floor(Math.random() * symbol.length)];
}

var lowerConfirm = function() {
  var c = confirm("Press OK if you want lowercase letters")
  if (c == true) {
    return true;
  }else {
    return false;
  }
}

var upperConfirm = function() {
  var c = confirm("Press OK if you want uppercase letters")
  if (c == true) {
    return true;
  }else {
    return false;
  }
}

var numberConfirm = function() {
  var c = confirm("Press OK if you want numbers")
  if (c == true) {
    return true;
  }else {
    return false;
  }
}

var symbolConfirm = function() {
  var c = confirm("Press OK if you want symbols")
  if (c == true) {
    return true;
  }else {
    return false;
  }
}

function generatePassword() {
  var length = getPasswordLength();
  var lowerCon = lowerConfirm();
  var upperCon = upperConfirm();
  var numberCon = numberConfirm();
  var symbolCon = symbolConfirm();
  let password = '';
  if (lowerCon == false && upperCon == false && numberCon == false && symbolCon == false) {
    return password = "Please choose atleast one";
  }else {
    while (password.length < length) {
      var getType = Math.floor(Math.random() * 4)
      switch (getType) {
        case 1:
          if (lowerCon == true) {
            password += getRandomLower();
          }
          break;
        case 2:
          if (upperCon == true) {
            password += getRandomUpper();
          }
          break;
        case 3:
          if (numberCon == true) {
            password += getRandomNumber();
          }
          break;
        case 0:
          if (symbolCon == true) {
            password += getRandomSymbol();
          }
          break;
          default:
            console.log("error");
            break;
      }
    }
  }
  if (password.length === length) {
    return password;
  }

}

var getPasswordLength = function() {
  var passwordLength = "";
  var parseLength;

  while (passwordLength == "" || passwordLength == null) {
    passwordLength = prompt("Please choose password length 8 to 128");
  }
  parseLength = parseInt(passwordLength);
  if (parseLength > 7 && parseLength < 129) {
    return parseLength;
  }else {
    window.alert("Please choose valid range");
    getPasswordLength();
  }
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
