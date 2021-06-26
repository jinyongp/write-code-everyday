// https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript

/**
 * 소수 판별
 *
 * @param {number} n
 * @return {number} 1부터 n까지의 수 사이의 소수의 개수
 */
function solution(n) {
  const primes = Array(n + 1).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i <= n; ++i) {
    if (!primes[i]) continue;
    for (let j = 2 * i; j <= n; j += i) {
      primes[j] = false;
    }
  }
  return primes.reduce((acc, val) => acc + val, 0);
}

let n;

[n] = [10];
console.log(solution(n)); // 4
