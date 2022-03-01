function shiftCharacter(char, shift) {
  const position = char.charCodeAt(0);
  let newPosition = position; 
  if (position >= 65 && position <= 90) {
    newPosition = position + shift;
    if (newPosition > 90) {
      newPosition = 65 + (newPosition - 91);
    } else if (newPosition < 65) {
      newPosition = 90 - (65 - newPosition)
    }
  } else if (position >= 97 && position <= 122) {
    newPosition = position + shift;
    if (newPosition > 122) {
      newPosition = 97 + (newPosition - 123);
    } else if (newPosition < 97) {
      newPosition = 122 - (97 - newPosition)
    }
  }
  return String.fromCharCode(newPosition);
}

Array.prototype.shiftString = function(shift) {
  return this.map(char => shiftCharacter(char, shift));
}

function caesarCipher(string, shift) {
  string = string.toString();
  return string.split('').shiftString(shift).join('');
}

export default caesarCipher;