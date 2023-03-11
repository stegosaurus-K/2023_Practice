const countSubstrings = s => {
  let count = 0;
  for (let i = 0; i < s.length; i++){
    // 回文字串长度为奇数
    for (let l = i, r = i; l >= 0 && r < s.length; l--, r++){
      if (s[l] === s[r]) count++;
      else break;
    }
    // 回文字串长度为偶数
    for (let l = i, r = i+1; l >= 0 && r < s.length; l--, r++){
      if (s[l] === s[r]) count++;
      else break;
    }
  }
  return count;
}
console.log(countSubstrings("fdsklf"));