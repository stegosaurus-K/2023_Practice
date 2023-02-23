/**
 * 二分、merge 函数
      二分，用快慢指针法，快指针走两步，慢指针走一步，快指针越界时，慢指针正好到达中点，只需记录慢指针的前一个指针，就能断成两链。
      merge 函数做的事是合并两个有序的左右链
      设置虚拟头结点，用 prev 指针去“穿针引线”，prev 初始指向 dummy
      每次都确定 prev.Next 的指向，并注意 l1，l2指针的推进，和 prev 指针的推进
      最后返回 dummy.Next ，即合并后的链。
 */

const sortList = head => {
  if (head === null || head.next === null) return head;
  let slow = head, fast = head;
  let preSlow = null;
  while (fast && fast.next) {
    preSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  preSlow.next = null;  //截断head成两半
  const left = sortList(head);
  const right = sortList(slow);
  return merge(left, right);
}
function merge(l1, l2) {
  let dummy = new ListNode();
  let prev = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next
  }
  if (l1) prev.next = l1;
  if (l2) prev.next = l2;
  return dummy.next;
}