const mergeTwoLists = function (list1, list2) {
  let curr = new ListNode();
  let head = curr;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  if (list1 !== null) {
    curr.next = list1;
  }
  if (list2 !== null) {
    curr.next = list2;
  }
  return head.next;
}