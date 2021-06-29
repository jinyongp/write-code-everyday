// https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

/**
 * 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
 * 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
 * i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
 * computer[i][i]는 항상 1입니다.
 *
 * n = 3
 * computer = [
 *   [1, 1, 0],
 *   [1, 1, 0],
 *   [0, 0, 1],
 * ]
 *
 * 0, 1, 2번 컴퓨터가 있다고 할 때,
 * 0번과 1번은 연결되어 있다.
 * 1번과 0번도 연결되어 있다.
 * 2번은 무엇과도 연결되어 있지 않다.
 *
 * 컴퓨터를 bfs로 순회하면서 모든 컴퓨터를 visited에 저장하면
 * 어느 네트워크에도 속하지 않는 컴퓨터가 존재하는 것이므로 network 수를 하나 증가시킨다.
 *
 * 고립된 네트워크 또한 찾아야하므로 모든 노드를 순회한다.
 *
 * - 하나의 network마다 dfs로 연결된 곳까지 전부 탐색한다.
 * - 0번 컴퓨터는 visited에 존재하지 않으므로 하나의 network를 이룬다. visited에 0번 컴퓨터를 추가하고, [1, 1, 0]을 통해 1번 컴퓨터와 연결되어 있음을 알 수 있다.
 * - 1번 컴퓨터에서 재귀로 연결되어 [1, 1, 0]을 탐색한다. 0번 컴퓨터와 연결되어 있지만 visited에 있으므로 더 탐색하지 않는다.
 * - 하나의 network를 모두 탐색했으므로 network에 1을 추가한다.
 * - visited에 1번 컴퓨터가 이미 있으므로 2번 컴퓨터를 탐색한다.
 * - 2번 컴퓨터는 visited에 존재하지 않으므로 하나의 network를 이룬다. 2번 컴퓨터와 연결된 컴퓨터가 하나도 없으므로 더 탐색하지 않는다.
 * - network가 1 증가하고 종료된다.
 */
function solution(n, computers) {
  let network = 0;
  const visited = Array(n).fill(false);

  for (let i = 0; i < n; ++i) {
    // i번 컴퓨터를 전부 탐색하기 위해서 dfs를 이용한다.
    if (!visited[i]) {
      dfs(i, n, computers, visited);
      network += 1;
    }
  }

  return network;
}

function dfs(num, n, computers, visited) {
  // num번 computer는 이미 탐색했으므로 visited에 추가한다.
  visited[num] = true;
  for (let i = 0; i < n; ++i) {
    const connected = computers[num][i];
    // i번 컴퓨터가 visited에 없고, i번과 num번은 달라야하며, num번 컴퓨터와 연결된 i번 컴퓨터라면, 계속 탐색한다.
    if (!visited[i] && i !== num && connected) {
      dfs(i, n, computers, visited);
    }
  }
}

let n;
let computers;

n = 3;
computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log(solution(n, computers));

n = 3;
computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
console.log(solution(n, computers));
