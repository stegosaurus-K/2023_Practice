const detectCycle = head => {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {  //说明有环
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
    }
    return fast;
  }
  return null;  //跳出while循环，说明没有环
}