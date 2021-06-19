// https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript

/**
 * heap을 통해 구현하기
 *
 * @param {number[][]} jobs [[작업이 요청되는 시점, 작업의 소요시간], ...]
 * @return {number} 작업의 요청부터 종료까지 걸린 최소 시간
 */
function solution(jobs) {
  jobs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  const priorityQueue = new PriorityQueue((a, b) => a[1] < b[1]);
  let answer = 0;
  let time = 0;
  let index = 0;

  const assignTasks = () => {
    for (let i = index; i < jobs.length; ++i) {
      if (jobs[i][0] > time) break;
      priorityQueue.enqueue(jobs[i]);
      index += 1;
    }
  };

  while (index < jobs.length || !priorityQueue.empty()) {
    if (priorityQueue.empty()) {
      const [startTime, executeTime] = jobs[index++];
      time = startTime + executeTime;
      answer += executeTime;
    } else {
      const [startTime, executeTime] = priorityQueue.dequeue();
      time += executeTime;
      answer += time - startTime;
    }
    assignTasks();
  }

  return Math.floor(answer / jobs.length);
}

class MinHeap {
  /**
   * @param {function(*, *): boolean} [comparator=(lhs, rhs) => lhs < rhs] sorting criteria
   */
  constructor(comparator = (lhs, rhs) => lhs < rhs) {
    this.heap = [0];
    this._comparator = comparator;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  empty() {
    return this.heap.length === 1;
  }

  insert(data) {
    this.heap.push(data);
    const moveUp = (index = this.heap.length - 1) => {
      const parentIndex = Math.floor(index / 2);
      const parentData = this.heap[parentIndex];
      const currentData = this.heap[index];
      if (index === 1 || !this._comparator(currentData, parentData)) return;
      this.swap(index, parentIndex);
      moveUp(parentIndex);
    };
    moveUp();
  }

  extract() {
    if (this.heap.length <= 1) return;
    if (this.heap.length === 2) return this.heap.pop();
    const data = this.heap[1];
    this.heap[1] = this.heap.pop();

    const moveDown = (index = 1) => {
      const leftChildIndex = index * 2;
      const rightChildIndex = index * 2 + 1;
      const currentData = this.heap[index];
      const leftChildData = this.heap[leftChildIndex];
      const rightChildData = this.heap[rightChildIndex];
      if (!leftChildData) return;
      if (!rightChildData) {
        if (this._comparator(leftChildData, currentData)) {
          this.swap(leftChildIndex, index);
          moveDown(leftChildIndex);
        }
      } else {
        if (this._comparator(leftChildData, rightChildData)) {
          if (this._comparator(leftChildData, currentData)) {
            this.swap(leftChildIndex, index);
            moveDown(leftChildIndex);
          }
        } else {
          if (this._comparator(rightChildData, currentData)) {
            this.swap(rightChildIndex, index);
            moveDown(rightChildIndex);
          }
        }
      }
    };
    moveDown();

    return data;
  }
}

class PriorityQueue extends MinHeap {
  empty() {
    return this.heap.length === 1;
  }

  enqueue(data, key) {
    this.insert(data, key);
  }

  dequeue() {
    return this.extract();
  }
}

let jobs;

[jobs] = [
  [
    [0, 3],
    [1, 9],
    [2, 6],
  ],
];
console.log(solution(jobs)); // 9

[jobs] = [
  [
    [0, 10],
    [2, 10],
    [9, 10],
    [15, 2],
  ],
];
console.log(solution(jobs)); // 15
