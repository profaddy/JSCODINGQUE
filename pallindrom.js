function isTextPalindrome(text) {
  if (text === undefined) {
    return false;
  }
  var left = 0;
  var right = text.length - 1;
  while (left < right) {
    if (text[left++] !== text[right--]) {
      return false;
    }
  }
  return true;
}

function isPhrasePalindrome(text) {
  var chars = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return isTextPalindrome(chars);
}

//////////////////////////**End**////////////////////////////////

const isPalindrome = () => {
  var chars = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return (
    chars
      .split("")
      .reverse()
      .join("") === chars
  );
};

/////////isNUmber Pallindrome/////////////////////////////////
const isPallindrome = (number) => {
  const reverse = Number(number.toString().split("").reverse().join(""));
  return reverse === number
}
