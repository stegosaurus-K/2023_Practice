function Person(name, age) {
  this.name = name;
  this.age = age;
  this.games = ["捉迷藏", "踢键子"]
}
Person.prototype.running = function () {
  console.log('在跑步~');
};

function Student() {
  this.score = 99;
}
Student.prototype = new Person();
Student.prototype.goToSchool = function () {
  console.log('去上学~');
};
let s1 = new Student();
let s2 = new Student();
s1.games.push("学习")
console.log(s1.games);
console.log(s2.games);
console.log(s1.running());


// 缺点：不能传递参数，且引用值类型的数据会被实例共享。