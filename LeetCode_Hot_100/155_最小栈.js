class MinStack {
  constructor() {
    this.stack = [];
    this.MinStack = [Infinity];
  }
  push(value) {
    this.stack.push(value);
    this.MinStack.push(Math.min(this.MinStack[this.MinStack.length - 1], value));
  }
  pop() {
    this.stack.pop();
    this.MinStack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.MinStack[this.MinStack.length - 1];
  }
}