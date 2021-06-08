// https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript

/**
 * 피보나치 수
 *
 * 피보나치는 n이 커질 때마다 이전 계산의 결과값을 계속 재활용하는 점화식이다.
 * cache를 만들어서 피보나치 수열을 저장하고 그 결과를 재활용하는 방식으로 진행한다.
 *
 * a = 0;
 * b = 1;
 * F(0) = 0
 * F(1) = 1
 *
 * F(2) = F(0) + F(1) = 0 + 1 = 1
 * F(2) = F(1) + F(2) = 1 + 1 = 2
 * ...
 *
 * => cache = [0, 1, 1, 2, ...]
 *
 * 호출될 때마다 이전 결과를 저장하여 효율을 높였다.
 */
function solution(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; ++i) {
    [a, b] = [b, (b + a) % 1234567];
  }
  return b;
}

let n;

n = 3;
console.log(solution(n)); // 2

n = 5;
console.log(solution(n)); // 5

n = 10;
console.log(solution(n)); // 55

n = 100;
console.log(solution(n)); // 963606

n = 1000;
console.log(solution(n)); // 138544
