var A = {
  name: "MArtin",
  data: { num: 10 },
  say: function () {
    console.log("hello world!")
  }
};
var B = {}; 
//1.用Object.assign(target,source)
Object.assign(B, A);
B.name = "Lucy";
console.log(A.name);   //Martin,发现A中的name没有改变
console.log(B.name);   
B.data.num = 5;
console.log(A.data.num);

// 2.for...in...
for(let key in A) {
    if(!A.hasOwnProperty(key)) break;   //不是私有属性就不遍历了   for in 会把原型上的东西也遍历一遍了
    B[key] = A[key];
}