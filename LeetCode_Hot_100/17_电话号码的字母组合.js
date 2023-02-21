const letterCombinations = function (digits) {
  if (digits.length === 0) {
    return []
  }
  const res = [];
  let map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  const backTrace = function (string, digits) {
    if (digits.length == 0) {
      res.push(string);
      return;
    }
    let str = map[digits[0]];
    for (let i = 0; i < str.length; i++){
      backTrace(string + str[i], digits.slice(1));
    }
  }
  backTrace('', digits);
  return res;
}


