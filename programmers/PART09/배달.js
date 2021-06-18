// https://programmers.co.kr/learn/courses/30/lessons/12978

/**
 * 가중치가 있는 그래프이다.
 *
 * 각 마을을 갈 수 있는 여러 방법 중 가장 적은 비용으로 가는 방법을 선택해서 저장해야 한다.
 *
 * N = 5; -> 마을의 개수
 * road = [
 *   [1, 2, 1], -> a, b, c (a, b 마을 연결, c 걸리는 시간)
 *   [2, 3, 3],
 *   [5, 2, 2],
 *   [1, 4, 2],
 *   [5, 3, 1],
 *   [5, 4, 2],
 * ];
 * K = 3; -> 음식 배달이 가능한 시간
 *
 * 연결된 경로를 확인하기 위해 road로 graph를 만든다.
 *
 * graph = {
 *   1: [ [ 2, 1 ], [ 4, 2 ] ],
 *   2: [ [ 1, 1 ], [ 3, 3 ], [ 5, 2 ] ],
 *   3: [ [ 2, 3 ], [ 5, 1 ] ],
 *   4: [ [ 1, 2 ], [ 5, 2 ] ],
 *   5: [ [ 2, 2 ], [ 3, 1 ], [ 4, 2 ] ]
 * }
 *
 * leastWeight는 각 마을로 가는데 최소 거리를 나타낸다.
 * 전부 Infinity(999으로 대체)로 한다.
 * 1번 마을은 비용이 0이다.
 * leastWeight = [999, 0, 999, 999, 999, 999, 999];
 *
 * 한 번 간 경로라 하더라도 더 적은 비용으로 갈 수 있는 경로일 수 있으므로 visited를 사용하지 않는다.
 * 완전 탐색이므로 stack을 사용하든 queue를 사용하든 차이는 없다.
 *
 * 1번 마을에서 출발하므로 stack에 1을 저장한다.
 *
 * stack에서 1을 꺼내고 graph로부터 다음 마을의 정보를 가져온다.
 * 2번 4번 마을에 가는 다음 가중치와 현재 leastWeight에 저장된 값을 비교해서 더 작으면 그 값을 할당한다.
 * 2번 마을은 가중치가 1이므로 leastWeight[2]에 1이 할당된다.
 * -> [999,0,1,999,999,999]
 * 4번 마을은 가중치가 2이므로 leastWeight[4]에 2가 할당된다.
 * 두 마을을 stack에 추가한다.
 *
 * 이런 식으로 2번 마을은 또 1번 마을과 5번 마을로 가는 경로의 가중치를 계산할 것이고,
 * 4번 마을은 1번 마을과 5번 마을로 가는 경로의 가중치를 계산할 것이다.
 *
 * 이렇게 반복하면서 각 마을로 가는 가장 적은 비용을 leastWeight에 모두 저장하여,
 * K보다 작거나 같은 값을 세고 그 개수를 반환한다.
 *
 * graph를 만드는 과정 O(road.length <= 2000)
 *
 * dfs 같은 경우 한 번 검색한 마을이더라도 더 최소 비용으로 접근 가능할 수 있지만,
 * 최소값이 계속 갱신되고 이렇게 된 부분은 더 이상 탐색하지 않으므로 충분히 가능한 시간 복잡도를 가질 것으로 예상된다.
 */
function solution(N, road, K) {
  const leastWeight = Array(N + 1).fill(Infinity);
  leastWeight[1] = 0;

  const graph = {};
  for (const [a, b, c] of road) {
    if (a in graph) graph[a].push([b, c]);
    else graph[a] = [[b, c]];
    if (b in graph) graph[b].push([a, c]);
    else graph[b] = [[a, c]];
  }

  function dfs(node) {
    for (const [nextNode, nextWeight] of graph[node]) {
      const total = leastWeight[node] + nextWeight;
      if (total < leastWeight[nextNode]) {
        leastWeight[nextNode] = total;
        dfs(nextNode);
      }
    }
  }
  dfs(1);

  return leastWeight.filter((w) => w <= K).length;
}

// function solution(N, road, K) {
//   const leastWeight = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
//   leastWeight[1] = 0;

//   const graph = {};
//   for (const [a, b, c] of road) {
//     if (a in graph) graph[a].push([b, c]);
//     else graph[a] = [[b, c]];
//     if (b in graph) graph[b].push([a, c]);
//     else graph[b] = [[a, c]];
//   }

//   const stack = [1];

//   while (stack.length > 0) {
//     const node = stack.pop();
//     for (const [nextNode, nextWeight] of graph[node]) {
//       const total = leastWeight[node] + nextWeight;
//       if (leastWeight[nextNode] > total) {
//         leastWeight[nextNode] = total;
//         console.log(JSON.stringify(leastWeight));
//         stack.push(nextNode);
//       }
//     }
//   }

//   return leastWeight.filter((w) => w <= K).length;
// }

let N, road, K;
N = 5;
road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
K = 3;
console.log(solution(N, road, K)); // 4

N = 6;
road = [
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 2],
  [3, 4, 3],
  [3, 5, 2],
  [3, 5, 3],
  [5, 6, 1],
];
K = 4;
console.log(solution(N, road, K)); // 4
