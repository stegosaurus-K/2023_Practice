const buildTree = function (preoder, inoder) {
  if (inoder.length === 0) return null;
  const root = new TreeNode(preoder[0]);
  const mid = inoder.indexOf(preoder[0]);
  root.left = buildTree(preoder.slice(1, mid + 1), inoder.slice(0, mid));
  root.right = buildTree(preoder.slice(mid + 1), inoder.slice(mid + 1));
  return root;
}