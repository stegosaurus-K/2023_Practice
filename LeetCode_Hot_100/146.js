// 定义一个创建节点的方法
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
// 实现 LRUCache 类
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashTable = {};
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }
  get(key) {
    let node = this.hashTable[key];
    if (node == null) return -1;
    this.moveTohead(node);
    return node.value;
  }
  moveTohead(node) {
    this.removeFromList(node);
    this.addToHead(node);
  }
  removeFromList(node) {
    let temp1 = node.prev;
    let temp2 = node.next;
    temp1.next = temp2;
    temp2.prev = temp1;
  }
  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }
  put(key, value) {
    let node = this.hashTable[key];
    if (node == null) {
      let newNode = new ListNode(key, value);
      this.hashTable[key] = newNode;
      this.count++;
      this.addToHead(newNode);
      if (this.count > this.capacity) {
        this.removeLRUItem();
      }
    } else {
      node.value = value;
      this.moveTohead(node);
    }
  }

  removeLRUItem() {
    let tail = this.popTail();
    delete this.hashTable[tail.key]; // 哈希表存储的是key
    this.count--;
  }
  popTail() {
    let tail = this.dummyTail.prev;
    this.removeFromList(tail);
    return tail;
  }
}