// https://programmers.co.kr/learn/courses/30/lessons/49189?language=javascript

/**
 * graph = {
 *   '1': [ 3, 2 ],
 *   '2': [ 3, 1, 4, 5 ],
 *   '3': [ 6, 4, 2, 1 ],
 *   '4': [ 3, 2 ],
 *   '5': [ 2 ],
 *   '6': [ 3 ]
 * }
 *
 * 최단 경로 알고리즘
 *
 * leastLength = [Inf, 0, Inf, Inf, Inf, Inf, Inf]
 * 1번 노드부터 출발하므로 0으로 초기화
 *
 * leastLength에 저장된 거리와 비교해서 최단 경로 갱신
 *
 * @param {number} n 노드의 개수
 * @param {number[][]} edges  간선에 대한 정보가 담긴 2차원 배열
 * @return {number} 1번 노드로부터 가장 멀리 떨어진 노드의 개수
 */
function solution(n, edges) {
  const graph = edges.reduce((obj, [from, to]) => {
    if (from in obj) obj[from].push(to);
    else obj[from] = [to];
    if (to in obj) obj[to].push(from);
    else obj[to] = [from];
    return obj;
  }, {});

  const leastLength = Array(n + 1).fill(Infinity);
  leastLength[1] = 0;

  const queue = [1];
  while (queue.length) {
    const node = queue.shift();
    for (const nextNode of graph[node]) {
      if (leastLength[node] + 1 < leastLength[nextNode]) {
        leastLength[nextNode] = leastLength[node] + 1;
        queue.push(nextNode);
      }
    }
  }
  let lastLength = 0;
  return leastLength
    .slice(1)
    .sort((a, b) => b - a)
    .findIndex((len) => {
      if (len < lastLength) return true;
      lastLength = len;
    });
}

let n, edges;

[n, edges] = [
  6,
  [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ],
];
console.log(solution(n, edges)); // 3
