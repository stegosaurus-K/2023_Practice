
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


const addTwoNumbers = function (l1, l2) {
  let carry = 0; //进位
  let dummy = new ListNode();
  let head = dummy;
  while (carry || l1 || l2) {
    let num1 = l1 !== null ? l1.val : 0;
    let num2 = l2 !== null ? l2.val : 0;
    let sum = num1 + num2 + carry;
    carry = sum >= 10 ? 1 : 0;
    dummy.next = new ListNode(sum % 10);
    dummy = dummy.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  return head.next;
}