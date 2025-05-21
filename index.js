function isPalindrome(str) {
  // Normalize string: lowercase and remove non-alphanumeric chars (optional)
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if normalized string equals its reverse
  return normalized === normalized.split('').reverse().join('');
}

// Examples
console.log(isPalindrome("madam"));      // true
console.log(isPalindrome("racecar"));    // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
