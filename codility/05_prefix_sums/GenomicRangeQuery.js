/**
 * S = CAGCCTA
 * prefix = [
 * //[A, C, G, T]
 *   [0, 0, 0, 0], // 0
 *   [0, 1, 0, 0], // C 1
 *   [1, 1, 0, 0], // A 2
 *   [1, 1, 1, 0], // G 3
 *   [1, 2, 1, 0], // C 4
 *   [1, 3, 1, 0], // C 5
 *   [1, 3, 1, 1], // T 6
 *   [2, 3, 1, 1], // A 7
 * ]
 *
 * P[0] = 2 => prefix[2] = [1, 1, 0, 0]
 * Q[0] = 4 => prefix[5] = [1, 3, 1, 0]
 *
 * prefix[5] - prefix[2] = [0, 2, 1, 0] => CCG: 2
 *
 * P[1] = 5 => prefix[5] = [1, 3, 1, 0]
 * Q[1] = 5 => prefix[6] = [1, 3, 1, 1]
 *
 * prefix[6] - prefix[5] = [0, 0, 0, 1] => T: 4
 *
 * P[2] = 0 => prefix[0] = [0, 0, 0, 0]
 * Q[2] = 6 => prefix[7] = [2, 3, 1, 1]
 *
 * prefix[7] - prefix[0] = [2, 3, 1, 1] => 1
 */
function solution(S, P, Q) {
  const s = S.replace(/A|C|G|T/g, (factor) => ({ A: 0, C: 1, G: 2, T: 3 }[factor]));
  const prefix = [[0, 0, 0, 0]];
  for (const factor of s) {
    const next = prefix[prefix.length - 1].slice();
    next[factor] += 1;
    prefix.push(next);
  }
  const answer = [];
  for (let i = 0; i < P.length; ++i) {
    const diff = prefix[Q[i] + 1].map((p, j) => p - prefix[P[i]][j]);
    answer.push(diff.findIndex((d) => d) + 1);
  }
  return answer;
}
