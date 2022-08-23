function isPalindrome(word) {
  let wordBack;
  let lastIndex = word.length - 1
  let wordBackArray = []
  for (let i = lastIndex; i >= 0; i--) {
    wordBackArray.push(word[i])
    console.log(word[i])
  }
  wordBack = wordBackArray.join("");
  console.log(wordBack)
  let result;
  if (word == wordBack) {
    result = true
  } else { result = false }
  return result
}

console.log(isPalindrome("kayak"))

/* 
  Add your pseudocode here
  take the word
  spell it backwards
      find length
      start with last index
      push it into a new array?
  compare wor to backward spelling
  return true if same, false if different
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
