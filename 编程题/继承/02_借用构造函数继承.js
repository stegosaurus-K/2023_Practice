function Person(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ['Yasuo', 'Zed', 'Yi'];
}
Person.prototype.running = function () {
  console.log('在跑步~');
};


function Student(name, age) {
  Person.call(this, name, age);
  this.score = 99;
}
// Student.prototype = new Person();
Student.prototype.goToSchool = function () {
  console.log('去上学~');
};
let s1 = new Student('Cyan', 18);
let s2 = new Student('Csy', 22);
console.log(s1.name);
console.log(s2.name);
s1.friends.push('LeeSin');
console.log(s1.friends);
console.log(s2.friends);
// console.log(s1.running());// 报错  s1访问不到Person的原型
/**
 * 优点：解决了原型链继承中不能传参且引用值共享问题。
   缺点：由上图可知，这个方式不能调用父类原型上的方法，因为 Student.prototype 和 Person.prototype 根本没有任何关系。
 */