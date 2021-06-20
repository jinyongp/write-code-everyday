// https://programmers.co.kr/learn/courses/30/lessons/12941?language=javascript

/**
 * 길이가 같은 배열 A, B
 *
 * 1. 각각 한 개의 숫자를 뽑아 두 수를 곱한다.
 * 2. 배열의 길이만큼 반복하며, 곱한 값을 모두 누적한다.
 * 3. 누적된 값을 최소로 하도록 한다.
 *
 * A: [1, 4, 2]
 * B: [5, 4, 4]
 *
 * A를 오름차순 B는 내림차순으로 정렬하여 곱한 뒤 반환한다
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number} 위의 계산 결과의 최솟값
 */
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((sum, num, i) => sum + num * B[i], 0);
}

let A, B;

[A, B] = [
  [1, 4, 2],
  [5, 4, 4],
];
console.log(solution(A, B)); // 29
