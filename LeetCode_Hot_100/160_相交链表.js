// pA 从链表 a 的头部开始走，走完后再从链表 b 的头部开始走；
// pB 从链表 b 的头部开始走，走完后再从链表 a 的头部开始走；
// 如果存在相交结点，则两个指针必会相遇
// 如果两个链表长度一样，第一次遍历就会相遇
// 如果两个链表长度不一样，第二次遍历就会相遇（走的路程长度一样）
// 如果不存在相交结点，长度一样，第一次遍历最后都是null，退出循环
//                  长度不一样，第二次遍历最后也是null



// const getIntersectionNode = (headA, headB) => {
//   let p1 = headA, p2 = headB;
//   while (p1 !== p2) {
//     if (p1 === null) p1 = headB;
//     else p1 = p1.next;
//     if (p2 === null) p2 = headA;
//     else p2 = p2.next;
//   }
//   return p1;
// }


// 哈希表
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  const map = new Map();
  let p1 = headA;
  while (p1) {
    map.set(p1, 1);
    p1 = p1.next;
  }
  let p2 = headB;
  while (p2) {
    if (map.has(p2)) return p2;
    p2 = p2.next;
  }
};