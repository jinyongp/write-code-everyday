// https://www.acmicpc.net/problem/7568

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];

/**
 * [ [ 55, 185 ], [ 58, 183 ], [ 88, 186 ], [ 60, 175 ], [ 46, 155 ] ]
 *
 * 덩치의 등수가 담길 배열 answer = [0, 0, 0, 0, 0]
 *
 * index = 0; rank = 1;
 * answer[0]에 1 할당
 *
 * index = 1; rank = 1; 0 순회
 * [ 55, 185 ]와 비교 불가이므로 answer[0] 유지
 * answer[1]에 rank 할당
 *
 * index = 2: rank = 1; 0, 1 순회
 * [ 55, 185 ]보다 크므로 answer[0]에 +1을 한다. 2
 * [ 58, 183 ]보다 크므로 answer[1]에 +1을 한다. 2
 * answer[2]에 1 할당
 *
 * index = 3; rank = 1; 0, 1, 2 순회
 * [ 55, 185 ]와 비교 불가이므로 answer[0] 유지
 * [ 58, 183 ]와 비교 불가이므로 answer[1] 유지
 * [ 88, 186 ]보다 작으므로 rank = 2;
 * answer[3]에 2 할당
 *
 * index = 4; rank = 1; 0, 1, 2, 3 순회
 * [ 55, 185 ]보다 작으므로 rank = 2
 * [ 58, 183 ]보다 작으므로 rank = 3
 * [ 88, 186 ]보다 작으므로 rank = 4;
 * [ 60, 175 ]보다 작으므로 rank = 5;
 * answer[4]에 5 할당
 *
 * answer = [ 2 2 1 2 5 ]
 *
 * @param {number} N 사람 수
 * @param {Number[][]} people [몸무게, 키] 사람들 정보
 * @return {string} 나열된 순서대로 덩치 등수를 반환
 */
function solution(N, people) {
  const answer = Array(N).fill(0);
  let rank = 1;

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j <= i; ++j) {
      if (answer[j] === 0) {
        answer[j] = rank;
        rank = 1;
        break;
      }
      const result = compare(people[i], people[j]);
      if (result === 1) answer[j] += 1;
      else if (result === -1) rank += 1;
    }
  }
  return answer.join(" ");
}

/**
 * a가 더 크다면 1
 * b가 더 크다면 -1
 * 비교할 수 없다면 0 을 반환한다.
 */
function compare([aW, aH], [bW, bH]) {
  if (aW > bW && aH > bH) return 1;
  if (aW < bW && aH < bH) return -1;
  return 0;
}

reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const N = Number(lines.shift());
    const people = lines.map((line) => line.split(" ").map(Number));
    console.log(solution(N, people));
    process.exit();
  });
