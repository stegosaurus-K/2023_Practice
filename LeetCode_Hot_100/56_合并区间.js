const merge = intervals => {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  let curr = intervals[0];
  for (let i = 1; i < intervals.length; i++){
    if (curr[1] >= intervals[i][0]) {
      curr[1] = Math.max(curr[1], intervals[i][1]);
    } else {
      res.push(curr);
      curr = intervals[i];
    }
  }
  if (curr.length) res.push(curr);
  return res;
}
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))