/**
 * 재귀를 이용한 방법
 */
function shortestPath(connections, N) {
  const graph = {};
  connections.forEach(([from, to, weight]) => {
    if (from in graph) graph[from].push([to, weight]);
    else graph[from] = [[to, weight]];
  });
  const shortest = Array(N + 1).fill(Infinity);
  shortest[1] = 0;
  const recursive = (node) => {
    for (const [nextNode, nextWeight] of graph[node]) {
      const total = nextWeight + shortest[node];
      if (shortest[nextNode] > total) {
        shortest[nextNode] = total;
        recursive(nextNode);
      }
    }
  };
  recursive(1);

  for (let i = 1; i < N; ++i) {
    console.log(`1번 노드 -> ${i}번 노드:`, shortest[i]);
  }
}

const N = 6;
const connections = [
  [1, 2, 2],
  [1, 3, 5],
  [1, 4, 1],
  [2, 1, 2],
  [2, 3, 3],
  [2, 4, 2],
  [3, 2, 3],
  [3, 4, 3],
  [3, 5, 1],
  [3, 6, 5],
  [4, 1, 1],
  [4, 2, 2],
  [4, 3, 3],
  [4, 5, 1],
  [5, 3, 1],
  [5, 4, 1],
  [5, 6, 2],
  [6, 5, 2],
  [6, 3, 5],
];

shortestPath(connections, N);
