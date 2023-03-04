function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    let _this = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, [...args]);
    }, delay);
  }
}
let debounce1 = debounce((name= "wjl") => {
  console.log(name)
}, 500);
debounce1();
debounce1();
debounce1("HUHSUD");
debounce1();
debounce1();
debounce1();
debounce1();
debounce1();
debounce1();
debounce1();
debounce1();
debounce1();
debounce1();
debounce1();
debounce1();
debounce1("WJL");