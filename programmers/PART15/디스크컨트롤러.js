// https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript

/**
 * heap을 통해 구현하기
 *
 * SJF(Shortest Job First) 스케줄링을 구현하는 문제이다.
 * - 작업 시간이 짧은 순서대로 작업
 * - 평균 대기 시간을 최적으로 하는 스케줄링
 * - 작업 시간을 예측해야하는 어려움이 있지만, 이 문제에선 이미 전부 제공됨
 * - 작업을 요청 시간 순서로 담고 있는 대기열, 소요 시간이 적은 순서대로 작업을 수행하는 작업 큐가 필요
 *
 * 시간이 전부 제공되어 있으므로 매 순간마다 최소 시간을 선택하면 되기 때문에 그리디 문제이기도 하다.
 *
 * 디스크가 작업을 수행하고 있지 않을 때 먼저 들어온 작업부터 처리하므로,
 * 작업이 요청되는 시점을 오른차순 정렬한다.
 * 작업이 요청되는 시점이 동일하다면 작업의 소요시간이 짧은 순으로 정렬한다.
 *
 * index를 통해 현재 위치의 jobs index를 기록한다.
 *
 * 먼저 들어온 작업대로 처리하면 최소 시간을 보장하지 못하므로 우선순위 큐를 사용해야 한다.
 * 우선순위에는 작업 중 가장 처리 시간이 적은 시간부터 실행해야 한다.
 *
 * [
 *   [0, 3],
 *   [1, 9],
 *   [2, 6],
 * ]
 *
 * PriorityQueue = []
 *
 * 우선순위 큐가 비었으므로 jobs의 순서대로 [0, 3]을 넣는다.
 * 시간이 3ms가 지날 동안, [1, 9]와 [2, 6]이 우선순위 큐에 할당된다.
 * [2, 6]이 더 짧은 작업 시간을 가지고 있으므로 [2, 6]이 먼저 작업되고, 그 후 [1, 9]가 작업된다.
 *
 * @param {number[][]} jobs [[작업이 요청되는 시점, 작업의 소요시간], ...]
 * @return {number} 작업의 요청부터 종료까지 걸린 최소 시간
 */
function solution(jobs) {
  jobs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  const priorityQueue = [];
  let answer = 0;
  let time = 0;
  let index = 0;

  console.log("jobs:", JSON.stringify(jobs));
  const assignTasks = () => {
    let changed = false;
    for (let i = index; i < jobs.length; ++i) {
      if (jobs[i][0] > time) break;
      priorityQueue.push(jobs[i]);
      index += 1;
      changed = true;
    }
    changed && priorityQueue.sort((a, b) => (b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]));
    changed && console.log("우선순위 큐:", JSON.stringify(priorityQueue));
  };

  while (index < jobs.length || priorityQueue.length) {
    if (priorityQueue.length) {
      const [startTime, executeTime] = priorityQueue.pop();
      console.log("우선순위 큐에서 가져온 데이터:", [startTime, executeTime]);
      time += executeTime;
      answer += time - startTime;
      assignTasks();
    } else {
      const [startTime, executeTime] = jobs[index++];
      console.log("비었을 때 처리한 데이터:", [startTime, executeTime]);
      time += startTime + executeTime - time;
      answer += executeTime;
      assignTasks();
    }
  }

  return Math.floor(answer / jobs.length);
}

let jobs;

// [jobs] = [
//   [
//     [0, 3],
//     [1, 9],
//     [2, 6],
//   ],
// ];
// console.log(solution(jobs)); // 9

[jobs] = [
  [
    [1, 3],
    [2, 3],
    [100, 2],
    [200, 2],
    [300, 2],
  ],
];
console.log(solution(jobs)); //
