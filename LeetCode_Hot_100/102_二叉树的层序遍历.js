const levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    let subRes = [];
    for (let i = 0; i < len; i++){
      let curr = queue.shift();
      subRes.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    res.push(subRes);
  }
  return res;
}