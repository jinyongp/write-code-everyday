// https://www.acmicpc.net/problem/11279

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 최대 힙을 구현
 *
 * @param {number[]} operators 연산의 대한 정보. 자연수라면 배열에 x 추가, 0이라면 가장 큰 값을 출력하고 제거
 * @return 0 연산에서 출력한 최댓값, 빈 배열의 경우 0을 출력
 */
function solution(operators) {
  const maxHeap = new MaxHeap();
  const answer = [];
  operators.forEach((operator) => {
    if (operator) maxHeap.insert(operator);
    else answer.push(maxHeap.empty() ? 0 : maxHeap.extract());
  });
  return answer.join("\n");
}

class MaxHeap {
  constructor(comparator = (lhs, rhs) => lhs > rhs) {
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

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    const N = Number(lines.shift());
    const numbers = lines.map(Number);
    console.log(solution(numbers));
    process.exit();
  });
