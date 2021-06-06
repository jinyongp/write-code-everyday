// https://programmers.co.kr/learn/courses/30/lessons/42861?language=javascript

/**
 * n = 4;
 * costs = [
 *   [0, 1, 1],
 *   [0, 2, 2],
 *   [1, 2, 5],
 *   [1, 3, 1],
 *   [2, 3, 8],
 * ];
 *
 * n: 섬의 개수
 * costs: 연결된 다리의 비용
 *
 * * Kruskal 알고리즘: 탐욕적인 방법을 이용하여 네트워크의 모든 정점을 최소 비용으로 연결하여 최적 해답을 구하는 것이다.
 * (크루스칼 알고리즘은 최적의 해답을 주는 것으로 검증되어 있다.)
 *
 * 크루스칼 알고리즘의 동작
 * - 그래프의 간선들을 가중치의 오름차순으로 정렬한다.
 * - 정렬된 간선 리스트에서 순서대로 사이클을 형성하지 않는 간선을 선택한다.
 *   - 가장 낮은 가중치를 먼저 선택한다.
 *   - 사이클을 형성하는 간선은 제외한다. (Union-find 알고리즘을 사용해야 한다.)
 * - 해당 간선을 현재 MST(최소 비용 신장 트리)의 집합에 추가한다.
 *
 * 간선 가중치의 합을 가장 최소로 하는 최소 비용 신장 트리를 얻는 것을 목표로 한다.
 */
function solution(n, costs) {
  costs.sort(([, , a], [, , b]) => a - b);
  const MST = makeSet(n);
  let answer = 0;

  for (const [from, to, cost] of costs) {
    if (!(find(MST, from) === find(MST, to))) {
      union(MST, from, to);
      answer += cost;
    }
  }

  return answer;
}

function makeSet(n) {
  return [...Array.from({ length: n }).keys()];
}

function find(set, x) {
  if (set[x] === x) return x;
  set[x] = find(set, set[x]);
  return set[x];
}

function union(set, x, y) {
  const rootX = find(set, x);
  const rootY = find(set, y);
  set[rootY] = set[rootX];
}

let n, costs;

n = 4;
costs = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
];
console.log(solution(n, costs));
