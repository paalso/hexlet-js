// Guard Expression

const isPalindrome1 = text => text.split('').reverse().join('') === text;

const isPalindrome = text => {
  if (text.length < 2)
    return true;
  if (text.at(0) !== text.at(-1))
    return false;
  return isPalindrome(text.slice(1,-1));
};

console.log(isPalindrome('radar')); // true
console.log(isPalindrome('a'));     // true
console.log(isPalindrome('abs'));   // false

// isPalindrome('radar') === true;
// isPalindrome('a') === true;
// isPalindrome('abs') !== false;