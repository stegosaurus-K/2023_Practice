var A = {
    name: "martin",
    data: { num: 10 },
    say: function () {
        console.log("hello world")
    }
};

function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj; // 基本数据类型
  if (obj instanceof RegExp) return new RegExp(obj); // 正则
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj === 'function') return new Function(obj);

  const newObj = obj.constructor;  // 使克隆出来的新对象仍然是同个构造函数的实例
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}
const B = deepClone(A);

A.data.num = 1;
A.say = function () {
    console.log('bitch')
}
A.say();

console.log(B, A);
console.log(B === A);
console.log(B.say === A.say);
console.log(B.data === A.data);
B.say();