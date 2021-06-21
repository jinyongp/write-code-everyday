// https://www.acmicpc.net/problem/1655

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 최대힙과 최소힙을 활용하여 중간값을 얻는다.
 *
 * >> 최대힙의 최댓값이 최소힙의 최솟값보다 항상 작거나 같게 유지를 하면, 최대힙의 최댓값이 항상 중간값이 된다.
 *
 * [ 1, 5, 2, 10, -99, 7, 5 ]
 *   최대힙 최소힙
 * 1: [1], [] => 최소힙이 empty라면 최대힙을 중간값으로 한다. (1)
 * 5: [1], [5] => 두 사이즈가 같으므로 최대힙의 최대를 중간값으로 한다. (1)
 * 2: [2, 1], [5] => 최대힙보다 최소힙이 항상 더 작게 유지해야하므로 2를 최대힙으로 옮긴다. (2)
 * 10: [2, 1], [5, 10] => 최대힙의 최대가 최소힙의 최소보다 작으므로 2를 중간값으로 한다.
 * -99: [2, 1, -99], [5, 10] => 위와 같다. (2)
 * 7: [2, 1, -99], [5, 7, 10] => 위와 같다. (2)
 * 5: [5, 2, 1, -99], [5, 7, 10] => 5는 최소힙의 최소와 같으므로 최대힙의 최대가 된다. (5)
 *
 * @param {number[]} numbers 수빈이가 외치는 정수
 * @return 수빈이의 동생이 말해야 하는 수
 */
function solution(numbers) {
  const maxHeap = new Heap((lhs, rhs) => lhs > rhs);
  const minHeap = new Heap();

  return numbers
    .map((number) => {
      maxHeap.size() === minHeap.size() ? maxHeap.insert(number) : minHeap.insert(number);
      if (maxHeap.peek() > minHeap.peek()) {
        const temp = minHeap.extract();
        minHeap.insert(maxHeap.extract());
        maxHeap.insert(temp);
      }
      console.log(maxHeap.heap, minHeap.heap);
      return maxHeap.peek();
    })
    .join("\n");
}

class Heap {
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

  peek() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }

  insert(data) {
    this.heap.push(data);
    const moveUp = (index = this.heap.length - 1) => {
      const parentIndex = Math.floor(index / 2);
      if (index === 1 || !this._comparator(this.heap[index], this.heap[parentIndex])) return;
      this.swap(index, parentIndex);
      moveUp(parentIndex);
    };
    moveUp();
  }

  extract() {
    if (this.empty()) return;
    if (this.heap.length === 2) return this.heap.pop();
    const data = this.heap[1];
    this.heap[1] = this.heap.pop();
    const moveDown = (index = 1) => {
      const leftChildIndex = index * 2;
      const rightChildIndex = index * 2 + 1;
      if (leftChildIndex >= this.heap.length) return 0;
      if (rightChildIndex >= this.heap.length) {
        if (this._comparator(this.heap[leftChildIndex], this.heap[index])) {
          this.swap(leftChildIndex, index);
          moveDown(leftChildIndex);
        }
      } else {
        if (this._comparator(this.heap[leftChildIndex], this.heap[rightChildIndex])) {
          if (this._comparator(this.heap[leftChildIndex], this.heap[index])) {
            this.swap(leftChildIndex, index);
            moveDown(leftChildIndex);
          }
        } else {
          if (this._comparator(this.heap[rightChildIndex], this.heap[index])) {
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
