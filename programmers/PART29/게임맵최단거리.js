// https://programmers.co.kr/learn/courses/30/lessons/1844?language=javascript

/**
 * 최단 경로를 구하는 문제이므로 bfs를 사용한다.
 *
 * maps를 그대로 활용한다. (별도의 visited가 필요하지 않다.)
 * 확인한 곳을 -1로 설정하여 이미 지나온 곳이라는 표식을 남긴다.
 *
 * @param {number[][]} maps 게임맵 (1: 이동가능, 0: 이동불가)
 * @return {number} (1, 1)에서 (n, m)까지 도달하는 최단거리
 */
function solution(maps) {
  const { length: n } = maps;
  const { length: m } = maps[0];

  const dr = [0, -1, 0, 1];
  const dc = [1, 0, -1, 0];

  const queue = [[[0, 0], 1]];
  while (queue.length) {
    const [[row, col], count] = queue.shift();
    if (row === n - 1 && col === m - 1) return count;

    for (let i = 0; i < 4; ++i) {
      const [nr, nc] = [row + dr[i], col + dc[i]];
      if (!maps[nr] || !maps[nr][nc]) continue;
      if (maps[nr][nc] < 0) continue;
      maps[nr][nc] = -1;
      queue.push([[nr, nc], count + 1]);
    }
  }

  return -1;
}

let maps;

[maps] = [
  [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ],
];
console.log(solution(maps)); // 11
