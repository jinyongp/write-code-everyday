// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

/**
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 *
 * dfs를 이용한 완전탐색 기법을 활용한다.
 *
 * numbers = [1, 1, 1, 1, 1]
 * target = 3
 *
 * 재귀를 통해 구현한다.
 *
 * 재귀함수의 탈출 조건은 index와 numbers 배열의 크기가 같을 때이다.
 * numbers의 배열의 총합을 구했으므로 sum과 target을 비교해 같으면 answer에 +1을 한다.
 *
 * sum에 값을 누적하는 방식으로 한다. [1, 1, 1, ...]에서 각 요소는 더하거나 혹은 빼는 연산을 하므로 두 경우를 고려한다.
 * [1, 1, 1, ...], [-1, 1, 1, ...]
 *
 * 이전 sum이 부모 노드이고 다음 더해야할 경우가 +1 혹은 -1 반드시 두 개가 나오므로 포화 이진 트리의 구조를 가진다.
 */
function dfs(numbers, target) {
  let answer = 0;

  function dfs(sum, index) {
    if (index === numbers.length) return sum === target && answer++;
    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  }

  dfs(0, 0);

  return answer;
}

function bfs(numbers, target) {
  let answer = 0;
  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [sum, index] = queue.shift();
    if (index === numbers.length) {
      if (sum === target) answer += 1;
    } else {
      queue.push([sum + numbers[index], index + 1]);
      queue.push([sum - numbers[index], index + 1]);
    }
  }

  return answer;
}

let numbers, target;
numbers = [1, 1, 1, 1, 1];
target = 3;
console.log(solution(numbers, target));
