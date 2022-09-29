/**
 * 1 2 3 4 5 6 7 8 9 10 11 : 2 -> 5
 *   ^   ^   ^   ^   ^
 *
 * 1 2 3 4 5 : 2 -> 2
 *   ^   ^
 * 5 - 2 = 3
 */
function solution(A, B, K) {
  return Math.floor(B / K) - Math.floor((A - 1) / K);
}

console.log(solution(6, 11, 2));
