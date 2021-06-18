// https://www.acmicpc.net/problem/1920

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * N와 M의 각각 최대 10만으로 선형 탐색으로 해결하면 O(NM)으로 총 100억번의 연산 필요
 *
 * 이분탐색을 통해 O(MlogN)으로 50만번의 연산으로 해결
 *
 * 이분탐색 전 정렬되어 있어야 함.
 *
 * A = 4 1 5 2 3
 *
 * left 인덱스, right 인덱스로 해결
 * left = 0, right = 4(A.length - 1)
 * mid = Math.floor((left + right) / 2);
 *
 * A[mid]보다 target이 더 작으면 right = mid - 1
 * A[mid]보다 target이 더 크면 left = mid +  1
 *
 * @param {number} N 자연수
 * @param {number[]} A N개의 정수
 * @param {number} M 자연수
 * @param {number[]} B M개의 정수
 * @return
 */
function solution(N, A, M, B) {
  A.sort((a, b) => a - b);
  const search = (left, right, target) => {
    if (left >= right) return A[left] === target;
    const mid = Math.floor((left + right) / 2);
    if (A[mid] > target) return search(0, mid - 1, target);
    else if (A[mid] < target) return search(mid + 1, right, target);
    else return A[mid] === target;
  };
  let result = [];
  for (const num of B) result.push(+search(0, A.length - 1, num));
  return result.join("\n");
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const N = Number(lines.shift());
    const A = lines.shift().split(" ").map(Number);
    const M = Number(lines.shift());
    const B = lines.shift().split(" ").map(Number);
    console.log(solution(N, A, M, B));
    process.exit();
  });
