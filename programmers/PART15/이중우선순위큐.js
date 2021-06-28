// https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript

/**
 *   명령어  수신 탑(높이)
 * - I 숫자  큐에 주어진 숫자를 삽입합니다.
 * - D 1    큐에서 최댓값을 삭제합니다.
 * - D -1   큐에서 최솟값을 삭제합니다.
 *
 * @param {string[]} “명령어 데이터” 형식의 문자열 배열
 * @return {number[]} 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]
 */
function solution(operations) {
  const heap = [];
  operations.forEach((operation) => {
    const [command, arg] = operation.split(" ");
    if (command === "I") heappush(heap, +arg);
    else {
      if (arg > 0) heap.pop();
      else heap.shift();
    }
  });
  return heap.length ? [heap[heap.length - 1], heap[0]] : [0, 0];
}

function heappush(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= value) left = mid + 1;
    else right = mid - 1;
  }
  arr.splice(left, 0, value);
}

let operations;

[operations] = [["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]];
console.log(solution(operations)); // [333, -45]

[operations] = [["I 1", "I 2", "D -1", "D -1", "D -1", "D -1", "I 3"]];
console.log(solution(operations)); // [333, -45]
