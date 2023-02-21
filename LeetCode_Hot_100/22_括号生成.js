const generateParenthesis = function (n) {
  const res = [];
  const addBracket = function (leftRemain, rightRemain, string) {
    if (!leftRemain && !rightRemain) {
      res.push(string);
      return;
    }
    if (leftRemain > 0) addBracket(leftRemain - 1, rightRemain, string + "(");
    if(leftRemain<rightRemain) addBracket(leftRemain,rightRemain - 1, string + ")")
  }
  addBracket(n, n, '');
  return res;
}
console.log(generateParenthesis(3))

/**
 *    addBracket(2, 2, "");
 *         addBracket(1, 2, "(");
 *             addBracket(0, 2, "()");
 *                    addBracket(0, 1, "()(");
 *                        addBracket(0, 0, "()()");
 *             addBracket(1, 1, "((");
 *                    addBracket(0, 1, "(()")
 *                        addBracket(0, 0, "(())")
 */