/**
 * 维护一个 baseVal，表示“当前遍历节点的前一个节点”，如果前一个节点大于等于当前节点，
 * 则表明这棵树的中序遍历过程中出现了乱序的情况，跳出遍历过程、return false
 */
// const isValidBST = root => {
//   let baseVal = -Infinity;
//   let res = true;
//   function hepper(node) {
//     if (node === null) return;
//     hepper(node.left);
//     if (baseVal >= node.val) {
//       res = false;
//       return;
//     }
//     hepper(node.right);
//   }
//   hepper(root);
//   return res;
// }



// 思路
//    二叉搜索树中序遍历得到一个升序数组，可利用这一特点来验证是否是二叉搜索树
// const isValidBST = root => {
//   const arr = [];
//   function inorderTraversal(node) {
//     if (node === null) return;
//     inorderTraversal(node.left);
//     arr.push(node.val);
//     inorderTraversal(node.right);
//   }
//   inorderTraversal(root);
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] >= arr[i + 1]) return false;
//   }
//   return true;
// }