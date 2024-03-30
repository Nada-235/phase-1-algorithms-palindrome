function isPalindrome(word) {
	// Write your algorithm here

	let start = 0;
	let end = word.length - 1;

	while (start < end) {
		if (word[start] !== word[end]) {
			return false;
    }
    
		start++;
		end--;
	}
	return true;
}

/* 
  Add your pseudocode here

  1. Initialize two pointers, one at the beginning of the word (start) and one at the end of the word (end).
  2. Iterate through the word using a while loop, where start < end.
  3. Inside the loop, compare characters at the start and end pointers.
  4. If the characters are not equal, return false (not a palindrome).
  5. If the characters are equal, move the start pointer forward and the end pointer backward.
  6. If the loop completes without returning false, return true (palindrome).
*/

/*
  Add written explanation of your solution here

    We initialize two pointers, one at the beginning of the word and one at the end. We iterate through the word, comparing characters at these pointers. If the characters are not equal, we return false, indicating that the word is not a palindrome. If all characters match, we continue moving the pointers inward until they meet or cross each other, indicating that the word is a palindrome. This approach ensures that we only need to iterate through the word once, making it efficient.
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
