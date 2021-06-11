// https://www.acmicpc.net/problem/1197

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];

/**
 * 크루스칼 알고리즘을 이용하여 MST(최소 스패닝 트리)를 구하기로 한다.
 *
 * 크루스칼 알고리즘의 단계는 다음과 같다
 * - 그래프의 간선을 가중치 순으로 오름차순 정렬한다.
 * - 사이클이 생성되지 않도록 간선을 연결한다.
 * - 해당 간선을 MST(set) 집합에 추가한다
 *
 * @param {number} V 정점의 개수
 * @param {number} E 간선의 개수
 * @param {number[][]} costs [출발 정점, 도착 정점, 가중치] 간선 연결
 * @return {number} 최소 스패닝 트리의 가중치
 */
function kruskal(V, E, costs) {
  costs.sort(([, , a], [, , b]) => a - b);
  const MST = Array.from({ length: V + 1 }).map((_, i) => i);
  let answer = 0;

  function find(set, x) {
    if (set[x] === x) return x;
    set[x] = find(set, set[x]);
    return set[x];
  }

  function union(set, x, y) {
    const rootX = find(set, x);
    const rootY = find(set, y);
    set[rootY] = rootX;
  }

  for (const [from, to, weight] of costs) {
    if (find(MST, from) === find(MST, to)) continue;
    union(MST, from, to);
    answer += weight;
  }

  return answer;
}

/**
 * 프림 알고리즘
 * - 선택된 정점에서 가장 낮은 가중치 간선으로 정점을 연결하며 확장하는 방식
 *
 * 프림 알고리즘의 단계는 다음과 같다.
 * - 임의의 정점을 선택한다.
 * - 선택한 정점과 인접하는 정점 중 최소 비용 간선이 존재하는 정점을 선택한다.
 * - 위 과정을 반복하여 모든 정점을 방문한다.
 *
 * @param {number} V 정점의 개수
 * @param {number} E 간선의 개수
 * @param {number[][]} costs [출발 정점, 도착 정점, 가중치] 간선 연결
 * @return {number} 최소 스패닝 트리의 가중치
 */
function prim(V, E, costs) {}

reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const [V, E] = lines.shift().split(" ").map(Number);
    const info = lines.map((line) => line.split(" ").map(Number));
    console.log(kruskal(V, E, info));
    // console.log(prim(V, E, info));
    process.exit();
  });
