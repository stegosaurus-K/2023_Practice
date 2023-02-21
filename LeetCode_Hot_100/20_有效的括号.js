const isValid = function (string) {
  const stack = [];
  for (let i = 0; i < string.length; i++){
    switch (string[i]) {
      case "(": stack.push(")"); break;
      case "[": stack.push("]"); break;
      case "{": stack.push("}"); break;
      default: if (string[i] !== stack.pop()) return false;
    }
  }
  return !stack.length;
}