const hasCycle = head => {
  if (head === null) return false;
  let slow = head, fast = head.next;
  while (fast) {
    if (slow.next === fast.next.next) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}