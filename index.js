function isPalindrome(word) {
  
    if(word.length < 2) return true
  
    let start = 0
    let end = word.length - 1
  
    while(start <= end){
      if(word[start] != word[end]){
        return false
      }
      start++
      end--
    }
  
      return true
    
  
  }


/* 
  loop through half of the string
  check if first and last string are same
  returns true or false
*/

/*
The length of the string is calculated using the length property.
The for loop is used to iterate up to the half of the string. The if condition is used to check if the first and the corresponding last characters are the same. This loop continues till the half of the string.
During the iteration, if any character of the string, when compared with its corresponding last string is not equal, the string is not considered a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
