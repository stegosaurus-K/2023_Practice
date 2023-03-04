function throttle(fn,delay) {
  let timer = false;
  return function (...args) {
    let _this = this;
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(_this, [...args]);
      timer = null;
    }, delay)
  }
}
let throttle1 = throttle((name = 'wjl') => console.log(name), 1);
throttle1("wjll")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("WJL")
throttle1("wjl")