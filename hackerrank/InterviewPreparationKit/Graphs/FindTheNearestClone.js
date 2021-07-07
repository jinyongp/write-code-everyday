// https://www.hackerrank.com/challenges/find-the-nearest-clone/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=graphs&h_r=next-challenge&h_v=zen

/**
 * 문제 해결 방법
 * - graph를 color 정보와 함께 생성한다.
 * - val을 통해 시작 노드를 찾는다.
 * - 시작 노드 외 같은 색을 가진 다른 노드가 없다면 -1을 반환한다.
 * - bfs 탐색을 통해 다음 동일한 색을 가진 노드까지 최단거리를 업데이트한다.
 * - 최단거리를 벗어나는 범위는 더이상 탐색하지 않는다.
 */
function solution(graphNodes, graphFrom, graphTo, ids, val) {
  const graph = {};
  for (let i = 0; i < graphFrom.length; ++i) {
    const from = graphFrom[i];
    const to = graphTo[i];
    const fromId = ids[from - 1];
    const toId = ids[to - 1];

    if (from in graph) graph[from].push([to, toId]);
    else graph[from] = [[to, toId]];
    if (to in graph) graph[to].push([from, fromId]);
    else graph[to] = [[from, fromId]];
  }

  const start = ids.indexOf(val) + 1;
  const next = ids.indexOf(val, start);
  if (next < 0) return -1;

  let answer = Infinity;
  const visited = Array(graphNodes + 1).fill(false);
  const queue = [[start, 0]];
  while (queue.length) {
    const [node, count] = queue.shift();
    if (visited[node] || count > answer) continue;
    visited[node] = true;

    for (const [nextNode, nextColor] of graph[node]) {
      if (visited[nextNode]) continue;
      if (nextColor === val) answer = Math.min(answer, count + 1);
      queue.push([nextNode, count + 1]);
    }
  }

  return answer;
}
