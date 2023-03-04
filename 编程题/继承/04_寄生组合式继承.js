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
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
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
console.log(s1.running());