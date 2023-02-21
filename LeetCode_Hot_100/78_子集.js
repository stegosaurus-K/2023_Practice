const subset = nums => {
  let result = [[]];
  for (let num of nums) {
    let temp = [];
    for (let k of result) {
      temp.push(k.concat(num));
    }
    result = [...result,...temp];
  }
  return result;
}
console.log(subset([1, 2, 3]))