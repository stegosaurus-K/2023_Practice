const rotate = function (matrix) {
  const len = matrix.length;
  if (!len) return [];
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len - i - 1; j++) {
      const arr = [
        matrix[i][j],
        matrix[j][len - i - 1],
        matrix[len - i - 1][len - j - 1],
        matrix[len - j - 1][i]
      ];
      matrix[i][j] = arr[3];
      matrix[j][len - i - 1] = arr[0];
      matrix[len - i - 1][len - j - 1] = arr[1];
      matrix[len - j - 1][i] = arr[2];
    }
  }
  return matrix;
}
console.log(rotate([
  [5, 1, 9, 11],  //i = 0, j = 1
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]))