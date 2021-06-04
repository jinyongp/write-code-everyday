// https://www.acmicpc.net/problem/2178

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
    const [N, M] = lines.shift().split(" ").map(Number);

    /**
     * N: 미로의 높이
     * M: 미로의 너비
     *
     * 101111
     * 101010
     * 101011
     * 111011
     *
     * 이를 2차원 배열로 변경하면,
     * [
     *   [1,0,1,1,1,1]
     *   [1,0,1,0,1,0]
     *   [1,0,1,0,1,1]
     *   [1,1,1,0,1,1]
     * ]
     *
     * (1,1)부터 시작하여 매번 위, 오른쪽, 아래, 왼쪽을 모두 검사하여,
     * 값이 1인 곳의 좌표를 dfs로 하여 완전탐색을 수행해야 한다.
     *
     * 재귀함수의 탈출 조건은 좌표가 N과 M에 도달했을 때이다. 여태까지 지난 칸의 개수를 answers에 추가한다.
     * 값이 1인 곳의 좌표로 dfs를 계속 호출한다.
     *
     * 갔던 곳을 다시 가면 안되므로 visited를 통해 이미 온 곳을 추가한다.
     *
     * 위, 오른쪽, 아래, 왼쪽 방향을 더 쉽게 확인하기 위해 이를 함수로 분리하면,
     * getAroundCoords(currentCoords = [x, y]) => [(x-1, y), (x, y-1), (x+1, y), (x, y+1)] 을 반환한다.
     *
     * 모든 내용을 answers 배열에 저장하고 가장 작은 값을 출력한다.
     */

    const answers = [];
    const maze = lines.map((line) => line.split("").map(Number));

    function getAroundCoords([x, y]) {
      return [
        [x - 1, y],
        [x, y - 1],
        [x + 1, y],
        [x, y + 1],
      ];
    }

    function compare([a, b], [c, d]) {
      return a === c && b === d;
    }

    const visited = new Set();
    visited.add(JSON.stringify([0, 0]));
    const queue = [[[0, 0], 1, visited]];

    while (queue.length > 0) {
      const [[row, col], count, history] = queue.shift();
      if (compare([row, col], [N - 1, M - 1])) {
        answers.push(count);
      }

      for (const [r, c] of getAroundCoords([row, col])) {
        const json = JSON.stringify([r, c]);
        if (!history.has(json)) {
          history.add(json);
          if (maze[r] && maze[r][c]) {
            queue.push([[r, c], count + 1, history]);
          }
        }
      }
    }

    console.log(Math.min(answers));
  });
