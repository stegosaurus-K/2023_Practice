const groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++){
    let str = strs[i].split('').sort().join('');
    if (map.has(str)) {
      let temp = map.get(str);
      temp.push(strs[i]);
      map.set(str, temp);
    } else {
      map.set(str,[strs[i]])
    }
  }
  return [...map.values()]
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))