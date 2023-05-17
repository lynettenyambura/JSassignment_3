function isStringBlank(str) {
    return str.trim() === '';
  }

console.log(isStringBlank('')); // true
console.log(isStringBlank('   ')); // true
console.log(isStringBlank('Hello')); // false
console.log(isStringBlank('   Hello   ')); // false
