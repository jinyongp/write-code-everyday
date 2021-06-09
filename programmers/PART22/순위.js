// https://programmers.co.kr/learn/courses/30/lessons/49191?language=javascript

/**
 * n: 권투선수
 * results: 경기 결과 배열
 * [A, B] => A 선수가 B 선수를 이겼다.
 *
 * 목표: 정확하게 순서를 매길 수 있는 선수의 수
 *
 * 플로이드 와샬 알고리즘 적용
 * => 최단거리로 갱신하는 알고리즘
 *
 * 다익스트라 알고리즘이 하나의 정점에서 출발했을 때 다른 모든 정점으로의 최단 경로를 구하는 알고리즘이라면,
 * 플로이드 와샬 알고리즘은 모든 정점에서 모든 정점으로 가는 최단 경로를 구하는 알고리즘이다.
 *
 * 방향 그래프에서 가중치를 가지고 있을 때 사용할 수 있다.
 *
 * - 그래프를 인접행렬 방식으로 표현한다. 동적계획법과 같이 최단거리를 업데이트할 수 있다.
 * - X라는 기준점을 잡아, A -> B로 가는 가중치와 A -> X -> B로 가는 가중치를 비교하여 최단 거리를 갱신한다.
 *
 * 이 문제의 경우,
 * X 선수가 Y 선수를 이기면, Y 선수가 이기는 선수는 모두 X 선수가 이길 수 있다.
 * matrix[from][to] = 1 && matrix[X][?] => matrix[from][?] = 1;
 *
 * 이렇게 모든 선수와의 승패가 확실히 구분된 선수의 수를 반환한다.
 *
 * @param {number} n 권투선수의 수
 * @param {number[][]} results 경기 결과의 배열
 * @return {number} 정확하게 순서를 매길 수 있는 선수의 수
 */
function solution(n, results) {
  const status = { WIN: 1, LOSE: -1, SELF: 2, UNKNOWN: 0 };
  const matrix = Array.from(Array(n), () => new Array(n).fill(status.UNKNOWN)).map((row, index) => {
    row[index] = status.SELF;
    return row;
  });
  results.forEach(([from, to]) => {
    matrix[from - 1][to - 1] = status.WIN;
    matrix[to - 1][from - 1] = status.LOSE;
  });

  for (let mid = 0; mid < n; ++mid) {
    for (let from = 0; from < n; ++from) {
      for (let to = 0; to < n; ++to) {
        if (matrix[from][mid] === status.WIN && matrix[mid][to] === status.WIN) {
          matrix[from][to] = status.WIN;
          matrix[to][from] = status.LOSE;
        }
      }
    }
  }

  return matrix.filter((val) => !val.includes(status.UNKNOWN)).length;
}

let n, results;

[n, results] = [
  5,
  [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ],
];
console.log(solution(n, results)); // 2
