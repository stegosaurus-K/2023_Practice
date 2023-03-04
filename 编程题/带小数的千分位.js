var str = "24144364562.4236547";
let int = str.split('.')[0];
let float = str.split('.')[1];
console.log("int:", int)
console.log("float:", float)
let arr = int.split('').reverse();
for (let i = 0; i < arr.length; i++) {
  if (i % 4 === 3) {
    arr.splice(i, 0, ',');
  }
}
let arr2 = float.split('');
for (let i = 0; i < arr2.length; i++) {
  if (i % 4 === 3) {
    arr2.splice(i, 0, ',');
  }
}
console.log(arr.reverse().join('') + '.' + arr2.join(''));

