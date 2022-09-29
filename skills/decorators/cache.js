let count = 0;

/**
 * 많은 CPU 계산을 요구하는 함수
 */
function fibonacci(n) {
  count += 1;
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`fibonacci(10): ${fibonacci(10)}`);
console.log(`before caching: ${count} count`);
count = 0;

/**
 * 캐싱을 해주는 래퍼 함수
 * - 재사용성
 * - 원래 함수의 복잡성
 */
function cacheDecorator(func) {
  let cache = new Map();
  return function () {
    const key = JSON.stringify(...arguments);
    if (!cache.has(key)) cache.set(key, func.apply(this, arguments));
    return cache.get(key);
  };
}

fibonacci = cacheDecorator(fibonacci);

console.log(`fibonacci(10): ${fibonacci(10)}`);
console.log(`after caching: ${count} count`);
