//  用数组存储，时间复杂度O(n), 空间复杂度O(n)
//   const isPalindrome = head => {
//   const arr = [];
//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }
//   let start = 0, end = arr.length - 1;
//   while (start < end) {
//     if (arr[start] !== arr[end]) return false;
//     start++;
//     end--;
//   }
//   return true;
// }

// 双指针 快慢指针，当快指针走到尽头时，慢指针刚好走到中间，断开链表
const isPalindrome = head => {
  if (head === null || head.next === null) return true;
  let slow = head;
  let fast = head;
  let prev;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  let head2 = null;
  while (slow) {
    let temp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = temp;
  }
  while (head && head2) {
    if (head.val !== head2.val) return false;
    head = head.next;
    head2 = head2.next;
  }
  return true;
}