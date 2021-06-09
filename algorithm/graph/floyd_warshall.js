/**
 * [
 *   [        0,        5, Infinity,        8 ],
 *   [        7,        0,        9, Infinity ],
 *   [        2, Infinity,        0,        4 ],
 *   [ Infinity, Infinity,        3,        0 ]
 * ]
 *
 * D[A, B] => A 정점 -> B 정점
 *
 * 인접행렬 그래프로 표현하게 되면 위와 같다.
 * 이 테이블은 "현재까지 계산된 최소 비용을 뜻한다."
 * 이 2차원 배열을 갱신하며 최종적으로 모든 최소 비용을 구해야 한다.
 *
 * 반복의 기준은 거쳐가는 정점이다.
 * 정점 O를 기준으로 했을 때,
 * "X에서 Y로 가는 최소 비용" 그리고 "X에서 O로 가는 비용 + O에서 Y로 가는 비용"을 비교해서 더 빠른 경우를 업데이트한다.
 *
 * 정점 1을 기준으로 하면, D[2, 3], D[2, 4], D[3, 2], D[3, 4], D[4, 2], D[4, 3]을 갱신할 수 있다.
 *
 * D[2, 3] vs. D[2, 1] + D[1, 3] => 9 vs. 7 + Inf => 9 선택
 * D[2, 4] vs. D[2, 1] + D[1, 4] => Inf vs. 7 + 8 => 15 선택
 * ...
 *
 * 이러한 방식으로, 다음처럼 모든 정점에 대해서 최단거리를 전부 업데이트할 수 있다.
 *
 * [
 *   [ 0,  5, 11,  8 ],
 *   [ 7,  0,  9, 13 ],
 *   [ 2,  7,  0,  4 ],
 *   [ 5, 10,  3,  0 ]
 * ]
 */
function floydWarshall(graph, N) {
  const matrix = Array.from(Array(N), () => new Array(N).fill(Infinity)).map((row, index) => {
    row[index] = 0;
    return row;
  });
  graph.forEach(([from, to, weight]) => {
    matrix[from - 1][to - 1] = weight;
  });

  for (let m = 0; m < N; ++m) {
    for (let from = 0; from < N; ++from) {
      for (let to = 0; to < N; ++to) {
        if (matrix[from][to] > matrix[from][m] + matrix[m][to]) {
          matrix[from][to] = matrix[from][m] + matrix[m][to];
        }
      }
    }
  }

  console.log(matrix);
}

const graph = [
  [1, 2, 5], // [출발노드, 도착노드, 가중치]
  [1, 4, 8],
  [2, 1, 7],
  [2, 3, 9],
  [3, 1, 2],
  [3, 4, 4],
  [4, 3, 3],
];
const N = 4; // 노드 수
floydWarshall(graph, N);
