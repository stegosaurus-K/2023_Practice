const exist = (board, word) => {
  let m = board.length;
  let n = board[0].length;
  // 创建一个与board同样的二维数组用于存放board元素是否被访问
  const used = new Array(m);
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n)
  }
  function canFind(row, col, i) {
    if (i === word.length) return true;
    if (row < 0 || row >= m || col < 0 || col >= n) return false;
    if (used[row][col] || board[row][col] !== word[i]) return false;
    used[row][col] = true;
    let canFindRest =
      canFind(row - 1, col, i + 1)
      || canFind(row + 1, col, i + 1)
      || canFind(row, col - 1, i + 1)
      || canFind(row, col + 1, i + 1);
    if (canFindRest) return true;
    used[row][col] = false;
    return false;
  }
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === word[0] && canFind(row, col, 0)) return true;
    }
  }
  return false;
};
// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB"
console.log(exist(board,word))