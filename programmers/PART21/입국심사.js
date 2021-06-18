// https://programmers.co.kr/learn/courses/30/lessons/43238?language=javascript

/**
 * n = 6
 * times = [7, 10]
 *
 * 이분 탐색 문제의 경우, 최솟값과 최댓값을 설정한 뒤 그 뒤 중간값을 통해 조건과 비교하고,
 * 조건이 만족할 때까지 최솟값 혹은 최댓값을 조정해야 한다. 또한, 탐색하려는 배열이 정렬되어 있어야 한다.
 *
 * 심사관은 10만 명 이하이므로 정렬과 선형 탐색이 충분히 가능하다.
 *
 * 최솟값 low = 0
 * 최댓값 high = 60분
 * 중간값 mid = 30분
 *
 * 30분으로 30 / 7 = 4명, 30 / 10 = 3명 총 7명은 심사할 수 있으므로 1명 더 많다.
 *
 * high를 mid 값인 30으로 하고 다시 계산하면,
 * low = 0
 * high = 30
 * mid = 15
 *
 * 15 / 7 = 2명, 15 / 10 = 1명 총 3명 심사할 수 있으므로 부족하다.
 *
 * low를 mid 값인 15로 하고 다시 계산하면,
 * low = 15
 * high = 30
 * mid = 22
 *
 * 22 / 7 = 3, 22 / 10 = 2 총 5명 심사할 수 있으므로 부족
 *
 * ... 이렇게 총 6명을 심사할 수 있는 최소 심사원을 계산하고 그 결과를 반환한다.
 *
 *
 * @param {number} n 입국심사를 기다리는 사람
 * @param {number[]} times 각 심사관이 한 명을 심사하는데 걸리는 시간
 * @return {number} 모든 사람이 심사 받는데 걸리는 시간의 최솟값
 */
function solution(n, times) {
  times.sort((a, b) => a - b);
  let low = 0;
  let high = times[times.length - 1] * n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let estimate = times.reduce((result, time) => result + Math.floor(mid / time), 0);
    if (estimate >= n) high = mid - 1;
    else low = mid + 1;
  }

  return low;
}

let n, times;

[n, times] = [6, [7, 10]];
console.log(solution(n, times)); // 28

[n, times] = [10, [2, 5, 7, 10]];
console.log(solution(n, times)); // 12

[n, times] = [3, [1, 99, 99]];
console.log(solution(n, times)); // 3

[n, times] = [2, [1, 2, 2, 2, 100]];
console.log(solution(n, times)); // 3
