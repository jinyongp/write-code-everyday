// https://programmers.co.kr/learn/courses/30/lessons/76503?language=javascript

/**
 * 연산: 임의의 두 점을 골라 한쪽은 1 증가, 다른 한 쪽은 1 감소시킨다.
 * dfs를 통해 현재 노드가 0이 되도록 만드는 횟수를 구한다.
 *
 * a = [ -5, 0, 2, 1, 2 ]
 * graph = {
 *    '0': [ 1, 3 ],
 *    '1': [ 0 ],
 *    '2': [ 3 ],
 *    '3': [ 4, 2, 0 ],
 *    '4': [ 3 ]
 * }
 *
 * 0번 노드를 루트 노드로 하여 시작한다.
 * dfs를 이용해야 하는데, 이 문제에선 재귀를 사용하면 stack overflow 에러가 발생하므로 반복문으로 처리해야 한다.
 *
 * a = [ -5, 0, 2, 1, 2 ]
 *
 *       0
 *     /   \
 *    1     3
 *        /   \
 *       2     4
 *
 * stack 구조를 활용한 dfs 구현(역순으로 올라오는 구조이므로 visited 있음 - 부모의 상태를 기억해야 한다.)
 *
 * answer = 0
 * visited = [ false, false, false, false, false ]
 * stack = [[ 0, 0 ]]
 *
 * currentNode: 0, parentNode: 0 <- pop - []
 * visited = [ false, false, false, false, false ]; answer = 0;
 *
 * - visited[0]이 false이므로 true로 변경
 * - childNode에서 모두 연산하면 다시 parentNode의 정보를 얻어야 하므로, currentNode를 다시 stack에 추가 => [[0, 0]]
 * - graph[currentNode]로부터 visited가 false이고 parentNode가 아닌 노드를 stack에 추가 => [[0, 0], [1, 0], [3, 0]]
 *
 * currentNode: 3, parentNode: 0 <- pop - [[0, 0], [1, 0]]
 * visited = [ true, false, false, false, false ]; answer = 0;
 *
 * - visited[3]이 false이므로 true로 변경
 * - stack.push([currentNode, parentNode]); => [[0, 0], [1, 0], [3, 0]]
 * - stack.push([childNode, currentNode]); => [[0, 0], [1, 0], [3, 0], [4, 3], [2, 3]]
 *
 * currentNode: 2, parentNode: 3 <- pop - [[0, 0], [1, 0], [3, 0], [4, 3]]
 * visited = [ true, false, false, true, false ]; answer = 0;
 *
 * - visited[2]가 false이므로 true로 변경
 * - stack.push([currentNode, parentNode]); => [[0, 0], [1, 0], [3, 0], [4, 3], [2, 3]]
 * - 추가될 childNode 없음
 *
 * currentNode: 2, parentNode: 3 <- pop - [[0, 0], [1, 0], [3, 0], [4, 3]]
 * visited = [ true, false, true, true, false ]; answer = 0;
 *
 * - visited[2]가 true이므로 연산이 필요함
 * - answer에 a[2]의 절댓값을 더함 => answer = 2
 * - a[3]에 a[2]를 더함 => [ -5, 0, 2, 3, 2 ]
 *
 * currentNode: 4, parentNode: 3 <- pop - [[0, 0], [1, 0], [3, 0 ]
 * visited = [ true, false, true, true, false ]; answer = 2;
 *
 * - visited[4]가 false이므로 true로 변경
 * - stack.push([currentNode, parentNode]); => [[0, 0], [1, 0], [3, 0], [4, 3]]
 * - 추가될 childNode 없음
 *
 * currentNode: 4, parentNode: 3 <- pop - [[0, 0], [1, 0], [3, 0]]
 * visited = [ true, false, true, true, true ]; answer = 0;
 *
 * - visited[4]가 true이므로 연산이 필요
 * - answer에 a[4]의 절댓값을 더함 => answer = 4
 * - a[3]에 a[4]를 더함 => [ -5, 0, 2, 5, 2 ]
 *
 * currentNode: 3, parentNode: 0 <- pop - [[0, 0], [1, 0]]
 * visited = [ true, false, true, true, true ]; answer = 0;
 *
 * - visited[3]이 true이므로 연산이 필요함
 * - answer에 a[3]의 절댓값을 더함 => answer = 9
 * - a[0]에 a[3]을 더함 => [ 0, 0, 2, 5, 2 ]
 *
 * currentNode: 1, parentNode: 0 <- pop - [[0, 0]]
 * visited = [ true, false, true, true, true ]
 *
 * - visited[1]이 false이므로 연산이 필요함
 * - stack.push([currentNode, parentNode]); => [[0, 0], [1, 0]]
 * - 추가될 childNode 없음
 *
 * currentNode: 1, parentNode: 0 <- pop - [[0, 0]]
 * visited = [ true, true, true, true, true ]
 *
 * - visited[1]이 true이므로 연산이 필요
 * - answer에 a[1]의 절댓값을 더함 => answer = 9
 * - a[0]에 a[1]을 더함 => [ 0, 0, 2, 5, 2 ]
 *
 * currentNode: 0, parentNode: 0 <- pop - []
 * visited = [ true, true, true, true, true ]
 *
 * - visited[0]이 true이므로 연산이 필요
 * - answer에 a[0]의 절댓값을 더함 => answer = 9
 * - a[0]에 a[0]을 더함 => [ 0, 0, 2, 5, 2 ]
 *
 * a[0](루트노드의 가중치)이 0이므로 answer를 반환, 0이 아니라면 -1을 반환
 *
 * @param {number[]} a 트리의 각 점의 가중치를 담은 배열
 * @param {number[][]} edges 트리의 간선정보
 * @return {number} 모든 가중치가 0이 되도록 하는 최소 연산 횟수, 불가능하면 -1
 */
function solution(a, edges) {
  if (a.reduce((r, v) => r + v, 0)) return -1;
  const graph = edges.reduce((result, [from, to]) => {
    if (from in result) result[from].push(to);
    else result[from] = [to];
    if (to in result) result[to].push(from);
    else result[to] = [from];
    return result;
  }, {});

  let answer = BigInt(0);
  const stack = [[0, 0]];
  const visited = Array(a.length).fill(false);
  while (stack.length) {
    const [currentNode, parentNode] = stack.pop();

    if (visited[currentNode]) {
      answer += BigInt(Math.abs(a[currentNode]));
      a[parentNode] += a[currentNode];
      console.log(a);
    } else {
      visited[currentNode] = true;
      stack.push([currentNode, parentNode]);
      for (const childNode of graph[currentNode]) {
        if (visited[childNode]) continue;
        stack.push([childNode, currentNode]);
      }
    }
  }
  console.log(a);
  return a[0] ? -1 : Number(answer);
}

let a, edges;

[a, edges] = [
  [-5, 0, 2, 1, 2],
  [
    [0, 1],
    [3, 4],
    [2, 3],
    [0, 3],
  ],
];
console.log(solution(a, edges)); // 9
[a, edges] = [
  [0, 1, 0],
  [
    [0, 1],
    [1, 2],
  ],
];
console.log(solution(a, edges)); // 3
