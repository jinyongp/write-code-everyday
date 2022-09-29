/**
 * @class Heap
 * @example
 *  const minHeap = new Heap();
 *  minHeap.insert(10);
 *  minHeap.insert(5);
 *  minHeap.insert(30);
 *
 *  minHeap.extract(); // 5
 *  minHeap.extract(); // 10
 *  minHeap.extract(); // 30
 *
 *  const maxHeap = new Heap((lhs, rhs) => lhs > rhs);
 *  maxHeap.insert(10);
 *  maxHeap.insert(5);
 *  maxHeap.insert(30);
 *
 *  maxHeap.extract(); // 30
 *  maxHeap.extract(); // 10
 *  maxHeap.extract(); // 5
 */
class Heap {
  /**
   * @param {function(*, *): boolean} [comparator=(lhs, rhs) => lhs < rhs] sorting criteria
   */
  constructor(comparator = (lhs, rhs) => lhs < rhs) {
    /**
     * @private
     * @description
     * - 부모 노드 인덱스 - Math.floor(현재 노드의 인덱스 / 2)
     * - 좌측 노드 인덱스 - 부모 노드 인덱스 * 2
     * - 우측 노드 인덱스 - 부모 노드 인덱스 * 2 + 1
     */
    this.heap = [0];
    /**
     * @private
     * @description 힙에서 최댓값 혹은 최솟값을 결정할 때 기준이 된다.
     * @example
     * const minHeap = new Heap();
     * const maxHeap = new Heap((lhs, rhs) => lhs > rhs);
     */
    this._comparator = comparator;
  }

  /**
   * @private
   * @description this.heap의 a 인덱스와 b 인덱스를 교환한다.
   */
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  /**
   * @return {boolean} 힙이 비었는지 여부를 반환한다.
   */
  empty() {
    return this.heap.length === 1;
  }

  /**
   * @param {*} data 삽입할 값
   */
  insert(data) {
    this.heap.push(data);
    const moveUp = (index = this.heap.length - 1) => {
      const pIndex = Math.floor(index / 2);
      if (index === 1 || !this._comparator(this.heap[index], this.heap[pIndex])) return;
      this.swap(index, pIndex);
      moveUp(pIndex);
    };
    moveUp();
  }

  /**
   * @return {*} 추출한 데이터
   */
  extract() {
    if (this.heap.length <= 1) return;
    if (this.heap.length === 2) return this.heap.pop();
    const data = this.heap[1];
    this.heap[1] = this.heap.pop();

    const moveDown = (index = 1) => {
      const lIndex = index * 2;
      const rIndex = index * 2 + 1;
      if (lIndex >= this.heap.length) return;
      if (rIndex >= this.heap.length) {
        if (this._comparator(this.heap[lIndex], this.heap[index])) {
          this.swap(lIndex, index);
          moveDown(lIndex);
        }
      } else {
        if (this._comparator(this.heap[lIndex], this.heap[rIndex])) {
          if (this._comparator(this.heap[lIndex], this.heap[index])) {
            this.swap(lIndex, index);
            moveDown(lIndex);
          }
        } else {
          if (this._comparator(this.heap[rIndex], this.heap[index])) {
            this.swap(rIndex, index);
            moveDown(rIndex);
          }
        }
      }
    };
    moveDown();

    return data;
  }
}

const maxHeap = new Heap((lhs, rhs) => lhs > rhs);
maxHeap.insert(4);
maxHeap.insert(8);
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(15);

console.log(maxHeap.heap);

console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());

maxHeap.insert(99);
maxHeap.insert(1);
maxHeap.insert(5);
maxHeap.insert(8);

console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());

const minHeap = new Heap();
minHeap.insert(4);
minHeap.insert(8);
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);

console.log(minHeap.heap);

console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());

minHeap.insert(99);
minHeap.insert(1);
minHeap.insert(5);
minHeap.insert(8);

console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
