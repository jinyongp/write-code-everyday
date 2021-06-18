// https://www.acmicpc.net/problem/10451

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * [0, 1, 2, 3, 4, 5, 6, 7, 8] <- index
 * [0, 3, 2, 7, 8, 1, 4, 5, 6]를 배열로서 인덱스와 매칭시킨다.
 *
 * 각 인덱스를 시작지점으로 하여 노드를 탐색하고 시작 지점이 다시 나오면 이를 사이클로 한다.
 *
 * visited를 이용하여 방문한 노드를 기록한다.
 *
 * 이를 재귀로 구현한다.
 * 탈출 조건은 visited[index]가 true일 때이다. 사이클이 하나이므로 1을 반환한다.
 *
 *
 * nodes = [0, 3, 2, 7, 8, 1, 4, 5, 6]
 * visited = [true, false, ...]
 *
 * 1번 인덱스부터 시작한다. (visited[1] = true) -> recursive(1) 호출
 * nodes[1] = 3 (visited[3] = true) -> recursive(3) 호출
 * nodes[3] = 7 (visited[7] = true) -> recursive(7)
 * nodes[7] = 5 (visited[5] = true) -> recursive(5)
 * visited[nodes[5]]가 true이므로 탈출조건에 부합, 1을 반환한다.
 *
 * 이렇게 모든 인덱스에 대해서 모든 노드를 방문할 때까지 반복하고 최종 사이클 수를 반환한다.
 *
 * @param {number} N 순열의 크기
 * @param {number[]} numbers 순열
 * @returns 순열에 존재하는 순열 사이클의 개수
 */
function solution(N, numbers) {
  const nodes = [...numbers];
  nodes.unshift(0);

  const visited = Array(N + 1).fill(false);

  let answer = 0;

  function recursive(index) {
    if (visited[nodes[index]]) return (answer += 1);
    visited[nodes[index]] = true;
    recursive(nodes[index]);
  }

  for (let i = 1; i <= N; ++i) {
    if (!visited[i]) {
      visited[i] = true;
      recursive(i);
    }
  }
  return answer;
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const T = Number(lines.shift());
    Array.from({ length: T }).forEach(() => {
      const N = Number(lines.shift());
      const numbers = lines.shift().split(" ").map(Number);
      console.log(solution(N, numbers));
    });
    process.exit();
  });
