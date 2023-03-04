const str = 'sfdsabjcakhefjsdhajdsaaaaaaaa';
const maxCharCount = str => {
  const obj = {};
  for (let i = 0; i < str.length; i++){
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  let char = '', count = 0;
  for (let key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      char = key;
    }
  }
  return [char, count];
}
console.log(maxCharCount(str));