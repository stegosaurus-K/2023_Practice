class Trie{
  constructor() {
    this.trie = {};
  }
  insert(word) {
    let obj = this.trie;
    for (let char of word) {
      if (!obj[char]) {
        obj[char] = {}
      }
      obj = obj[char];
    }
    obj.isEnd = true;
  }
  searchPrefix(prefix) {
    let obj = this.trie;
    for (let char of prefix) {
      if (!obj[char]) return false;
      obj = obj[char];
    }
    return obj;
  }
  search(word) {
    let obj = this.searchPrefix(word);
    return obj.isEnd !== undefined; // 如果找到最后一层，isEnd = true；没找到最后一层，obj不存在idEnd属性，为undefined
  }
  startWith(prefix) {
    return !!this.searchPrefix(prefix);
  }
}