// https://www.acmicpc.net/problem/1012

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const T = Number(lines.shift());

    function getAroundCoords([x, y]) {
      return [
        [x - 1, y],
        [x, y - 1],
        [x + 1, y],
        [x, y + 1],
      ];
    }

    /**
     * 모든 곳을 확인해야한다. visited는 하나로 관리한다.
     *
     * 모든 구간을 순회하면서 더 이상 나아갈 수 없을 때까지 하고 주변에 갈 수 있는 곳이 아무 곳도 없으면 count를 1 증가한다.
     *
     * 1을 만나는 곳을 확인해서 visited에 없으면 그 구간에 한해서 dfs를 돌린다.
     */
    function solution() {
      const [M, N, K] = lines.shift().split(" ").map(Number);
      const items = [];
      for (let i = 0; i < K; ++i) items.push(lines.shift().split(" ").map(Number));

      const map = Array.from(Array(N), () => new Array(M).fill(0));
      for (const [col, row] of items) map[row][col] = 1;

      let count = 0;
      const visited = new Set();

      /**
       * 하나의 [row, col]을 받아서 주변을 확인하고 연결된 모든 좌표를 visited에 추가한다.
       */
      function dfs(coords, visited) {
        const stack = [coords];
        while (stack.length > 0) {
          const [r, c] = stack.pop();
          for (const [row, col] of getAroundCoords([r, c])) {
            const json = JSON.stringify([row, col]);
            if (!visited.has(json)) {
              visited.add(json);
              if (map[row] && map[row][col]) stack.push([row, col]);
            }
          }
        }
      }

      for (let row = 0; row < N; ++row) {
        for (let col = 0; col < M; ++col) {
          const flag = map[row][col];
          const json = JSON.stringify([row, col]);
          if (flag && !visited.has(json)) {
            visited.add(json);
            dfs([row, col], visited);
            count += 1;
          }
        }
      }

      console.log(count);
    }

    Array.from({ length: T }).forEach((_) => solution());
  });
