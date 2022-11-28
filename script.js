// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Declaring the character arrays
  var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numArray = ["0","1","2","3","4","5","6","7","8","9"];
  var specArray = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",";",":","<",">","?","/","~"];
  var passwordArray = [];
  var passwordMasterArray = [];  

  var passwordLengthStr = prompt("How many characters would you like your password to be? \nPlease enter a number between 8 and 128.");
  // passwordLength validation and parse to number
    var passwordLengthInt = parseInt(passwordLengthStr)
    // Validate passwordLengthInt is between 8 and 128
      if (passwordLengthInt < 8 || passwordLengthInt > 128){
        if (passwordLengthInt < 8){
          alert("Your password is too short, please try again and pick a number between 8 - 128.");
          return;
        }
        else if (passwordLengthInt > 128){
          alert("Your password is too long, please try again and pick a number between 8 - 128.");
          return
        }
      }
      // password Special Characters selection
    var lowerArraySelBol = confirm("Would you like lowercase letters in your password? \nSelect OK for yes and CANCEL for no.");
    var upperArraySelBol = confirm("Would you like uppercase letters in your password? \nSelect OK for yes and CANCEL for no.");
    var numArraySelBol = confirm("Would you like numbers in your password? \nSelect OK for yes and CANCEL for no.");
    var specArraySelBol = confirm("Would you like special characters in your password? \nSelect OK for yes and CANCEL for no.");
    // define and add all selections to passwordSelObj
     var passwordSelObj = {
      passwordLength: passwordLengthInt,
      lowerArraySel: lowerArraySelBol,
      upperArraySel: upperArraySelBol,
      numArraySel: numArraySelBol,
      specArraySel: specArraySelBol
     };
      // Add selected arrays to passwordMasterArray 
      if (passwordSelObj.lowerArraySel){
        passwordMasterArray = passwordMasterArray.concat(lowerArray);
      }
      if (passwordSelObj.upperArraySel){
        passwordMasterArray = passwordMasterArray.concat(upperArray);
      }
      if (passwordSelObj.numArraySel){
        passwordMasterArray = passwordMasterArray.concat(numArray);
      }
      if (passwordSelObj.specArraySel){
        passwordMasterArray = passwordMasterArray.concat(specArray);
      }
    else if (!passwordSelObj.lowerArraySel && !passwordSelObj.upperArraySel && !passwordSelObj.numArraySel && !passwordSelObj.specArraySel){
      // returns if no arrays are selected
      alert("You must select at least one character type to generate a password.");
        return
      }
      //loop passwordSelObj.passwordLength times to select a random character from passwordMasterArray
     for (var i = 0; i < passwordSelObj.passwordLength; i++){   
        var randomChar = passwordMasterArray[Math.floor(Math.random() * passwordMasterArray.length)];
        passwordArray.push(randomChar);
     }
    // Join passwordArray into a string
     password = passwordArray.join(""); 
      // Display password in #password
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
  }


