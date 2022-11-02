function isPalindrome(string) {
  const word = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] === word[len- 1 - i]) {
      return 'It is a palindrome';
    } else {
      return 'It is not a palindrome'
    }
  }
}

/* 
  Add your pseudocode here
Expect first element, second element to match last element, second to last element in word
*/

/*
  Add written explanation of your solution here
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
