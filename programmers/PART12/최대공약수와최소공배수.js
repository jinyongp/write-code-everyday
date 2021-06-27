// https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript

/**
 * @param {number} n
 * @param {number} m
 * @return {number[]} n과 m의 [최대공약수, 최소공배수]
 */
function solution(n, m) {
  return [gcd(m, n), lcm(m, n)];
}

function gcd(n, m) {
  return m ? gcd(m, n % m) : n;
}

function lcm(n, m) {
  return (n * m) / gcd(m, n);
}

let n, m;

[n, m] = [2, 5];
console.log(solution(n, m)); // [1, 10]
