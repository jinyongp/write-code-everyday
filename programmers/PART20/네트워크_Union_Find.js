// https://programmers.co.kr/learn/courses/30/lessons/43162

/**
 * 다음 문제를 Union find 알고리즘을 통해 해결한다.
 *
 * Union find 알고리즘은 어느 한 노드가 어떤 집합에 속하는지 확인하는 알고리즘이다.
 *
 * n = 3
 * computers = [
 *   [1, 1, 0],
 *   [1, 1, 0],
 *   [0, 0, 1],
 * ]
 *
 * n이 3이므로 init 연산에서 [{0}, {1}, {2}]의 집합이 생성된다.
 * 이는 makeSet을 통해 [0, 1, 2]의 배열이 생성된다.
 * 배열 구조이지만, 인덱스를 노드 번호, 요소를 집합의 루트 노드 번호라고 보면 아래의 표처럼 나타낼 수 있다.
 *
 * 루트노드 [0, 1, 2]
 * 현재노드 [0, 1, 2]
 *
 * 처음 init 연산에서 집합에 유일한 한 개의 노드가 있고, 그 노드가 곧 루트 노드이다.
 * computers를 순회하면서 연결된 부분을 union을 통해 합치는 과정은 아래와 같다. ([0, 0], [1, 1], [2, 2]는 무시된다.)
 *
 * union(0, 1)
 * 루트노드 [0, 0, 2]
 * 현재노드 [0, 1, 2]
 *
 * union(1, 0)
 * 루트노드 [1, 1, 2]
 * 현재노드 [0, 1, 2]
 *
 * 현재 0번 노드와 1번 노드는 같은 루트 노드를 가지므로 동일한 집합에 속한다.
 * 2번 노드는 다른 루트 노드를 가지므로 다른 집합에 속한다.
 *
 * sets를 Set으로 하여 중복을 제가한 뒤 개수를 새면 네트워크의 개수가 된다.
 */
function solution(n, computers) {
  const sets = makeSet(n);

  function makeSet(num) {
    return Array.from({ length: num }).map((_, i) => i);
  }

  function find(x) {
    if (sets[x] === x) return x;
    sets[x] = find(sets[x]);
    return sets[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    sets[rootY] = rootX;
  }

  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers.length; j++) {
      if (i !== j && computers[i][j]) union(i, j);
    }
  }

  return new Set(sets).size;
}

let n, computers;

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
