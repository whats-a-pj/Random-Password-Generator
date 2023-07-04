//TODO Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var passwordUpperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var passwordSpecial = ["~","`","-","_","=","+","[","]","{","}","'",".","?","!","@","#","$","%","^","&","*","(",")",","];
var passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var passwordCharChoice = [];

var getLowerCase = function() {
  var lowerCasePrompt = window.prompt("Choose security features for your new password; \n Add lowercase letters? \n type y for yes \n type n for no");
  if (lowerCasePrompt === "y") {
    window.alert("You chose lowercase letters to add to your password")
    passwordCharChoice = passwordCharChoice.concat(passwordLowerLetters)
  } else if (lowerCasePrompt === "n")
  {
    window.alert("You did not choose to add lowercase letters to your password")
  } else {
    window.alert("Input invalid, default is 'add lowercase letters'")
    }
  }
  
  var getUpperCase = function() {
    var upperCasePrompt = window.prompt("Choose security features for your new password; \n Add uppercase letters? \n type y for yes \n type n for no");
    if (upperCasePrompt === "y") {
      window.alert("You chose uppercase letters to add to your password")
      passwordCharChoice = passwordCharChoice.concat(passwordUpperLetters)
    } else if (upperCasePrompt === "n")
    {
      window.alert("You did not choose to add uppercase letters to your password")
    } else {
      window.alert("Input invalid, default is 'add uppercase letters'")
    }
  }
    
  
    var getSpecialChars = function() {
      var chooseSpecialChars = window.prompt("Choose security features for your new password; \n Add special characters? \n type y for yes \n type n for no");
      if (chooseSpecialChars === "y") {
        window.alert("You chose special characters to add to your password")
        passwordCharChoice = passwordCharChoice.concat(passwordSpecial)
      } else if (chooseSpecialChars === "n")
      {
        window.alert("You did not choose to add special characters to your password")
      } else {
        window.alert("Input invalid, default is 'add special characters'")
        }
      }
  
      var getNumbers = function() {
        var chooseNumbers = window.prompt("Choose security features for your new password; \n Add numbers? \n type y for yes \n type n for no");
        if (chooseNumbers === "y") {
          window.alert("You chose numbers to add to your password")
          passwordCharChoice = passwordCharChoice.concat(passwordNumbers)
        } else if (chooseNumbers === "n")
        {
          window.alert("You did not choose to add numbers to your password")
        } else {
          window.alert("Input invalid, default is 'add numbers'")
          }
        }

      var getLength = function() {
      var chooseLength = window.prompt("How long do you want your password- in characters?")
        if (chooseLength >= 8 && chooseLength <= 128) {
      window.alert("Excellent choice. Now you can click the 'Generate Password' \n button and if you'd like to reset your security \n preferences, just refresh the page.")
        return chooseLength
      } else if (chooseLength < 8 && chooseLength < 128 ) {
    window.alert("must have at least 8 characters, but less than 128");
    getLength()
      } else {
    window.alert("Input invalid, default is '15 characters'")
    return 15;
    }
}

//TODO Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
 
}
function generatePassword() {
  while (passwordCharChoice.length === 0) {
    getLowerCase()
    getUpperCase()
    getSpecialChars()
    getNumbers()
    console.log(passwordCharChoice)
  }
  var length = getLength()
  var newPassword = ""
  for (var i=0; i < length; i++) {
  var randomArray = (Math.floor(Math.random() * passwordCharChoice.length))
  newPassword = newPassword + passwordCharChoice[randomArray]
  }
return newPassword
}


//TODO Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//TODO user MUST select at least 1 of the criteria or receive error message?

//TODO add a series of prompts for password criteria when user clicks the generate button






//passwordLowerLetters(index), passwordUpperLetters(index), passwordChars(index), passwordNumbers(index)
//var passwordChars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","-","_","=","+","[","]","{","}","'",".","?","!","@","#","$","%","^","&","*","(",")",",","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 //(Math.floor(Math.random() * passwordChars.length));
  //min length 8 max length 128 -> math.random??
//document.getElementById("#password").innerHTML = passwordText
//for (var i=0; i < passwordChars.length; i++)
//var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Math.floor(Math.random() * passwordChars.length);
//preventDefault();
/*if (generateBtn === "true") {
  passwordText = getRandomValues("0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ")
} */