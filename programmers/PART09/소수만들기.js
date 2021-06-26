// https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

/**
 * 소수 판별: 에라토스테네스의 체 O(Nlog(logN))
 *
 * - 판별하고자 하는 범위 + 1을 배열로 선언한다
 * - 2부터 특정 수의 배수가 되는 수를 모두 제거한다.
 * - 남아있는 수가 소수임을 확인한다.
 *
 * @param {number[]} nums 숫자 배열
 * @return {number} 주어진 숫자 배열에서 3개의 수를 더 했을 때 소수가 되는 경우의 개수
 */
function solution(nums) {
  const allCases = combinations(nums, 3).map((n) => n.reduce((r, v) => r + v));
  const max = Math.max(...allCases);
  const primes = Array(max + 1).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i <= max; ++i) {
    if (!primes[i]) continue;
    for (let j = i * 2; j <= max; j += i) {
      primes[j] = false;
    }
  }
  return allCases.filter((c) => primes[c]).length;
}

function combinations(iterable, r = iterable.length) {
  if (r <= 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = origin.slice(index + 1);
    return result.concat(combinations(rest, r - 1).map((comb) => [value, ...comb]));
  }, []);
}

let nums;

[nums] = [[1, 2, 3, 4]];
console.log(solution(nums)); // 1
