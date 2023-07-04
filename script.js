//this method grabs the button id "generate" from the html file
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//lines 5-8 contain arrays with all the possible string elements that will randomize in the #password (id) section
var passwordLowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var passwordUpperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var passwordSpecial = ["~","`","-","_","=","+","[","]","{","}","'",".","?","!","@","#","$","%","^","&","*","(",")",","];
var passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"];

//this is an empty array that will add string types based on the user input
var passwordCharChoice = [];

//this is a function for if the user does or does not decide to use lowercase letters in their password
  var getLowerCase = function() {
    var chooseLowerCase = window.prompt("Choose security features for your new password; \n Add lowercase letters? \n type y for yes \n type n for no");
      if (chooseLowerCase === "y") {
        window.alert("You chose lowercase letters to add to your password")
//if user chooses to add lowercase letters, this .concat method will add the array in line 5 to the user's choice (passwordCharChoice)
        passwordCharChoice = passwordCharChoice.concat(passwordLowerLetters)
      } else if (chooseLowerCase === "n")
      {
        window.alert("You did not choose to add lowercase letters to your password")
      } else {
//if user inputs anything but y for yes and n for no- this is the default
        window.alert("Input invalid, default is 'no lowercase letters'")
      }
  }

//this is a function for if the user does or does not decide to use uppercase letters in their password
  var getUpperCase = function() {
    var chooseUpperCase = window.prompt("Choose security features for your new password; \n Add uppercase letters? \n type y for yes \n type n for no");
      if (chooseUpperCase === "y") {
        window.alert("You chose uppercase letters to add to your password")
//if user chooses to add uppercase letters, this .concat method will add the array in line 6 to the user's choice (passwordCharChoice)
        passwordCharChoice = passwordCharChoice.concat(passwordUpperLetters)
      } else if (chooseUpperCase === "n")
      {
        window.alert("You did not choose to add uppercase letters to your password")
      } else {
//if user inputs anything but y for yes and n for no- this is the default
        window.alert("Input invalid, default is 'no uppercase letters'")
      }
  }

//this is a function for if the user does or does not decide to use special characters in their password
  var getSpecialChars = function() {
    var chooseSpecialChars = window.prompt("Choose security features for your new password; \n Add special characters? \n type y for yes \n type n for no");
      if (chooseSpecialChars === "y") {
        window.alert("You chose special characters to add to your password")
//if user chooses to add special characters, this .concat method will add the array in line 7 to the user's choice (passwordCharChoice)
        passwordCharChoice = passwordCharChoice.concat(passwordSpecial)
      } else if (chooseSpecialChars === "n")
      {
        window.alert("You did not choose to add special characters to your password")
      } else {
//if user inputs anything but y for yes and n for no- this is the default
        window.alert("Input invalid, default is 'no special characters'")
      }
  }

//this is a function for if the user does or does not decide to use numbers in their password
  var getNumbers = function() {
    var chooseNumbers = window.prompt("Choose security features for your new password; \n Add numbers? \n type y for yes \n type n for no");
      if (chooseNumbers === "y") {
        window.alert("You chose numbers to add to your password")
//if user chooses to add numbers, this .concat method will add the array in line 8 to the user's choice (passwordCharChoice)
        passwordCharChoice = passwordCharChoice.concat(passwordNumbers)
      } else if (chooseNumbers === "n")
      {
        window.alert("You did not choose to add numbers to your password")
      } else {
//if user inputs anything but y for yes and n for no- this is the default
        window.alert("Input invalid, default is 'no numbers'")
      }
  }

//this is a function for how long the user chooses to make their password- with a minimum of 8 characters and a max of 128
  var getLength = function() {
    var chooseLength = window.prompt("How long do you want your password- in characters?")
//if the users chooses between 8-128 characters then the writePassword() function will run
      if (chooseLength >= 8 && chooseLength <= 128) {
        window.alert("Excellent choice. Now you can click the 'OK' \n and if you'd like to reset your security \n preferences, just refresh the page.")
      return chooseLength
//if the user chooses less than 8 or more than 128 the function will continue to prompt the user for password length
      } else if (chooseLength < 8 && chooseLength < 128 ) {
        window.alert("Must have at least 8 characters but less than 128, \n please input a numeric value that fits these requirements");
        getLength()
//i added this precaution incase the user inputs an alphabetic value instead of a number to make the default length of the password the minimum of 8 characters
      } else {
        window.alert("Input invalid, must be a number value; \n your password has defaulted to '8 characters' \n refresh the page to reset your preferences, \n or click generate password button reset password length")
      return 8;
      }
  }

//this function will run when the user clicks the generate password button and fill in the placeholder that originally says "Your Secure Password" with a new one
  function writePassword() {
    var password = generatePassword()
    var passwordText = document.querySelector("#password");
      passwordText.value = password;
  }

//this function runs through all the possible outcomes of their newly generated password, based on what the user chose
//this function runs locally inside of the writePassword() function
  function generatePassword() {
//these functions will continue to loop until the user chooses at least one of the password features
      while (passwordCharChoice.length === 0) {
        getLowerCase()
        getUpperCase()
        getSpecialChars()
        getNumbers()
      }
    
//this getLength method/function will randomize the array items based on user preferences
    var passwordLength = getLength()
    var newPassword = "";
      for (var i=0; i < passwordLength; i++) {
        var randomArray = (Math.floor(Math.random() * passwordCharChoice.length))
        newPassword = newPassword + passwordCharChoice[randomArray]
      }
      return newPassword;
}

//this event listener waits for user to click generate password button, then it will run through all the functions on this page
// generateBtn.addEventListener("click", writePassword);