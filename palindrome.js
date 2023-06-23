function palindrome(str) {
  str = str.toLowerCase();
  let regex = /[a-z0-9]/
  str = str.split('')
  str = str.filter(function(letter){
  return regex.test(letter)
  });
  str = str.join('')
  let copy = str
  let checker = []
  copy = copy.split('')
  for(let i = 0; i < str.length; i++){
    checker.push(copy.pop())
  }
  let final = checker.join('')
  console.log(final)
  console.log(str)
  if (str == final) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama");
