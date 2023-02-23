class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashMap = new Map();
  }
  get(key) { 
    if (this.hashMap.has(key)) {
      let temp = this.hashMap.get(key);
      this.hashMap.delete(key);
      this.hashMap.set(key, temp);
      return temp;
    } else {
      return -1
    }
  }
  put(key, value) { 
    if (this.hashMap.has(key)) {
      this.hashMap.delete(key);
      this.hashMap.set(key, value);
    } else if (this.capacity > this.hashMap.size) {
      this.hashMap.set(key, value);
    }else {
      this.hashMap.set(key, value);
      this.hashMap.delete(this.hashMap.keys().next().value)
    }
  }
}