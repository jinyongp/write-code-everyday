function add(a, b) {
  return a + b;
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

add = spy(add);

add(1, 2);
add(3, 4);

for (const args of add.calls) {
  console.log(`call: ${args.join()}`);
}
