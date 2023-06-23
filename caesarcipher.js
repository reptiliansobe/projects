function rot13(str) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let decoded = []
  for(let i = 0; i < str.length; i++){
    let index = 0
    if (alphabet.indexOf(str[i]) >= 0) {
      index = alphabet.indexOf(str[i]) + 13;
      if (index >= 26){
        index -= 26;
      }
      decoded.push(alphabet[index])
    }
    else {
      decoded.push(str[i])
    }
  }
  decoded = decoded.join('')
  return decoded
  console.log(decoded)
}

rot13("SERR PBQR PNZC");
