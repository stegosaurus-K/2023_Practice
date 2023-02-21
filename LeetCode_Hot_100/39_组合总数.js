const combinationSum = function (candidates, target) {
  const res = [];
  const dfs = (start, temp, sum) => {  // start是当前选择的起点索引 temp是当前可能解的集合 sum是当前求和
    if (sum >= target) {  // 递归出口，当sum >= target时退出循环
      sum === target ? res.push([...temp]) : '';
      return;
    }
    for (let i = start; i < candidates.length; i++) {  // 枚举当前可选的数，从start开始
      temp.push(candidates[i]);  // temp推入当前数
      dfs(i, temp, sum + candidates[i]);  //基于此继续选择，传i，下一次就不会选到i左边的数
      temp.pop();  // 弹出当前数，回溯
    }
  }
  dfs(0, [], 0);
  return res;
};
console.log(combinationSum([2, 3, 5], 8));
/**
  dfs(0,[],0)
    start = 0, temp = [], sum = 0;
    sum < target，进入for循环，temp = [2]
    dfs(0,[2],2)
        start = 0, temp = [2], sum = 2;
        sum < target, 进入for循环, temp = [2,2]
        dfs(0,[2,2],4)
          start = 0, temp = [2,2], sum = 4;
          sum < target, 进入for循环，temp = [2,2,2]
          dfs(0,[2,2,2],6)
              start = 0, temp = [2,2,2,2], sum = 8
              sum = target, res.push([...temp]), res = [[2,2,2,2]]

 */