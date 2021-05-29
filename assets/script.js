// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here
function generatePassword() {

  // variable that will contain the characters once all prompts are answered
  var charString = "";
  var userPassword = "";
  
  // Prompt user to enter desired password length
  var passwordLength = prompt("Enter your desired password length. (Between 8 to 128 characters)");
  
  // Check to validate that the user entered the proper criteria for password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please choose a value between 8 and 128");
    return;
  }
  else {
    alert("Your password will be " + passwordLength + " characters long!");
    console.log("Password length: " + passwordLength);
  }

  // Prompt to check if lowercase characters are needed
  var passChoiceLower = confirm("Would you like your password to contain lowercase characters?");

  // If yes, then concat the charString to contain lowercase characters and proceed to next prompt
  if (passChoiceLower) {
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    charString += lowerChars;
    alert("Your password will contain lowercase characters!");
    console.log("Added lowercase characters to charString");
    console.log("Current charString: " + charString);
  }
  // If no, then do not concat anything to charString and proceed to next prompt
  else {
    alert("Your password will NOT contain lowercase characters!");
    console.log("Did NOT add lowercase characters to charString");
    console.log("Current charString: " + charString);
  }

  // Prompt to check if uppercase characters are needed
  var passChoiceUpper = confirm("Would you like your password to contain uppercase characters?");

  // If yes, then concat the charString to contain uppercase characters and proceed to next prompt
  if (passChoiceUpper) {
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charString += upperChars;
    alert("Your password will contain UPPERCASE characters!");
    console.log("Added uppercase characters to charString");
    console.log("Current charString: " + charString);
  }
  // If no, then do not concat anything to charString and proceed to next prompt
  else {
    alert("Your password will NOT contain UPPERCASE characters!");
    console.log("Did NOT add uppercase characters to charString");
    console.log("Current charString: " + charString);
  }
  
  // Prompt to check if numeric characters are needed
  var passChoiceNumeric = confirm("Would you like your password to contain numeric characters?");

  // If yes, then concat the charString to contain numeric characters and proceed to next prompt
  if (passChoiceNumeric) {
    var strNum = "0123456789";
    charString += strNum;
    alert("Your password will contain numeric characters!");
    console.log("Added numeric characters to charString");
    console.log("Current charString: " + charString);
  }
  // If no, then do not concat anything to charString and proceed to next prompt
  else {
    alert("Your password will NOT contain numeric characters!");
    console.log("Did NOT add numeric characters to charString");
    console.log("Current charString: " + charString);
  }

  // Prompt to check if special characters are needed
  var passChoiceSpecial = confirm("Would you like your password to contain special characters?");

  // If yes, then concat the charString to contain special characters and proceed to next prompt
  if (passChoiceSpecial) {
    var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    charString += specialChars;
    alert("Your password will contain special characters!");
    console.log("Added special characters to charString");
    console.log("Current charString: " + charString);
  }
  // If no, then do not concat anything to charString and proceed to next prompt
  else {
    alert("Your password will NOT contain special characters!");
    console.log("Did NOT add special characters to charString");
    console.log("Current charString: " + charString);
  }

  // Check the password str to see if it is in it's original state, if it is, inform the user they have to select one of the prompts
  if (charString === "") {
    alert("You must select one of the character selections");
    return("Invalid Input");
  }
  else {
    // Loop through the charString randomly for inputted length and concat the indivdual characters to form a password
    for (var i = 0; i < passwordLength; i++) {
      var randomNum = Math.floor(Math.random() * charString.length);
      userPassword += charString.substring(randomNum, randomNum + 1);
    }
    // Return the user's password out of the function
    return userPassword;
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
