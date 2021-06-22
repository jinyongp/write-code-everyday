// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

/**
 * 우선순위 큐를 활용한 문제이다.
 *
 * priorities = [2, 1, 3, 2];
 * location = 2
 *
 * 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
 * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
 * 3. 그렇지 않으면 J를 인쇄합니다.
 *
 * 2를 꺼낸다. 우선순위가 3으로 더 높은 문서가 있으므로 2를 대기목록의 마지막에 넣는다.
 * 1을 꺼낸다. 우선순위가 3으로 더 높은 문서가 있으므로 1을 대기목록의 마지막에 넣는다.
 * 3을 꺼낸다. 우선순위가 가장 높으므로 이를 인쇄한다. location이 0이 되었으므로 몇 번째 출력되었는지 반환한다.
 *
 * 대기목록 queue = [ [ 2, 0 ], [ 1, 1 ], [ 3, 2 ], [ 2, 3 ] ] => [priority, index]
 * answer = 0 // 현재 인쇄 횟수
 *
 * 1. [2, 0]을 꺼낸다. some 메서드를 활용하여 queue 내에 우선 순위가 더 높은지 확인한다.
 * 2. 3이 더 높으므로 [2, 0]을 queue의 마지막에 넣는다. 아직 출력된 것은 아니므로 answer가 증가하진 않는다.
 * 3. [1, 1]을 꺼낸다. queue 내에 더 높은 우선순위 3이 있으므로 다시 queue의 마지막에 넣는다.
 * 4. [3, 2]를 꺼낸다. queue 내에서 가장 높은 우선순위이므로 출력한다. 해당 index가 뽑으려는 location이 맞는지 확인한다.
 * 5. 같으므로 반복을 멈추고 현재 인쇄 횟수를 반환한다. (만약 달랐더라면, 인쇄 횟수를 1 증가한다.)
 *
 * @param {}
 * @return {}
 */
function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((p, i) => [p, i]);
  console.log(queue);
  while (queue.length) {
    const [priority, index] = queue.shift();
    if (queue.some(([p, _]) => priority < p)) queue.push([priority, index]);
    else if (location === index) break;
    else answer += 1;
  }
  return answer + 1;
}

let priorities, location;

[priorities, location] = [[2, 1, 3, 2], 2];
console.log(solution(priorities, location)); // 1
[priorities, location] = [[1, 1, 9, 1, 1, 1], 0];
console.log(solution(priorities, location)); // 5
