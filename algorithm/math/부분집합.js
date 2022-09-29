function powerSet(iterable, r = iterable.length) {
  const result = [];
  const queue = [new Set()];
  while (queue.length) {
    const set = queue.shift();
    result.push(set);
    if (set.size < r) {
      for (let i = 0; i < iterable.length; ++i) {
        if (set.has(iterable[i])) continue;
        const copied = new Set(set).add(iterable[i]);
        queue.push(copied);
      }
    }
  }
  return result.map((r) => [...r]);
}

const results = powerSet([1, 2, 3, 4], 2);
console.log(results);
