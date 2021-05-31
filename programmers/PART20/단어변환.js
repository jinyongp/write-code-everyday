// https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript
/*
bfs, dfs는 완전 탐색 기법, 그래프를 순회하는 방법
순회를 하는 도중 가지치기(pruning), 백트래킹(backtracking), 메모이제이션(memoization)

"hit"	"cog"	["hot", "dot", "dog", "lot", "log", "cog"]	4

queue = [[hit, 0]]
visited = ()

node
hit => queue = [[hot, 1]], visited = (hit)
hot => queue = [[dot, 2], [lot, 2]], visited = (hit, hot)
dot => queue = [[lot, 2], [dog, 3]], visited = (hit, hot, dot)
lot => queue = [[dog, 3], [log, 4]], visited = (hit, hot, dot, lot)
dog => queue = [[log, 4], [cog, 4]], visited = (hit, hot, dot, lot, dog)
log => queue = [[cog, 4]], visited = (hit, hot, dot, lot, dog, log)
cog => return step; // 4

hit에서 hot으로 연결되는 것을 어떻게 알 수 있을까?

hit에서 각 인덱스 요소를 ?로 치환한 ?it, h?t, hi?와
hot에서 각 인덱스 요소를 ?로 치환한 ?ot, h?t, ho?를 비교한다.
h?t가 같으므로 이는 연결될 수 있는 요소이다.

O(문자의 길이)의 시간복잡도로 해결할 수 있다.
*/
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  // 1. 시작점을 큐에 저장한다. 현재 단어와 스텝
  const queue = [[begin, 0]];
  const visited = new Set(); // 이미 탐색한 단어를 또 탐색하지 않는다.

  const makeQuery = (str, i) => str.substr(0, i) + "?" + str.substr(i + 1);

  while (queue.length > 0) {
    // 2. 큐에서 맨 앞 요소를 꺼낸다.
    const [node, step] = queue.shift();
    if (node === target) return step;

    // 3. 현재 노드에서 다음으로 선택할 수 있는 것을 조사한다.
    if (!visited.has(node)) {
      visited.add(node);
      // words 순환
      for (let i = 0; i < words.length; i++) {
        if (!visited.has(words[i])) {
          // words[i] 순환
          for (let j = 0; j < words[i].length; j++) {
            const nodeQuery = makeQuery(node, j);
            const wordQuery = makeQuery(words[i], j);
            if (nodeQuery === wordQuery) {
              queue.push([words[i], step + 1]);
            }
          }
        }
      }
    }
  }
}

const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(solution(begin, target, words));
