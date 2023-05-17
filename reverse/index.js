function reverseWords(str) {
    if (typeof str !== 'string') {
      return "It must be a string.";
    }
    
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
  // Test cases
  console.log(reverseWords("abc")); // Output: "cba"
  console.log(reverseWords("JavaScript Exercises")); // Output: "tpircSavaJ sesicrexE"
  console.log(reverseWords(1234)); // Output: "It must be a string."
  