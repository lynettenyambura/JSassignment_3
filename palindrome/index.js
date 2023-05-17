function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Check if the reversed string is equal to the original string
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(isPalindrome('dad'));    // true
  console.log(isPalindrome('madam'));  // true
  console.log(isPalindrome('hello'));  // false
  console.log(isPalindrome('A man, a plan, a canal, Panama!'));  // true
  
  
  