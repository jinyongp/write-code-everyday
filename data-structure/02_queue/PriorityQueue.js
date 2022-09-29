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

  enqueue(data) {
    this.insert(data);
  }

  dequeue() {
    return this.extract();
  }
}

const priorityQueue = new PriorityQueue((a, b) => a[1] < b[1]);

priorityQueue.enqueue([10, 1]);
priorityQueue.enqueue([15, 2]);
priorityQueue.enqueue([7, 10]);
priorityQueue.enqueue([1, 77]);
priorityQueue.enqueue([5, 7]);
priorityQueue.enqueue([100, 30]);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

priorityQueue.enqueue([4, 40]);
priorityQueue.enqueue([3, 3]);
priorityQueue.enqueue([2, 7]);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

priorityQueue.enqueue([2, 100]);
priorityQueue.enqueue([2, 40]);
priorityQueue.enqueue([2, 1]);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
