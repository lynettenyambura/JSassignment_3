function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert both strings to lowercase
    str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();
  
    // Check if the lengths of the two strings are equal
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create frequency maps for each string
    const frequencyMap1 = {};
    const frequencyMap2 = {};
  
    // Populate frequency map for str1
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
    }
  
    // Populate frequency map for str2
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
    }
  
    // Compare the frequency maps
    for (const char in frequencyMap1) {
      if (frequencyMap1[char] !== frequencyMap2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const str1 = "abcd";
  const str2 = "dabc";
  
  console.log(areAnagrams(str1, str2)); // Output: true
  