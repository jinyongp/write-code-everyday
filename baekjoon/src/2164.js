// https://www.acmicpc.net/problem/2164

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 1 ~ N번의 카드가 쌓아였다.
 *
 * 1번부터 다음과 같은 과정을 반복한다.
 * - 가장 위에 있는 카드를 버린다.
 * - 가장 위에 있는 카드를 맨 아래로 옮긴다.
 *
 * 큐 자료구조를 활용한다.
 *
 * @param {number} N 카드의 개수
 * @return 마지막으로 남는 카드 번호
 */
function solution(N) {
  const queue = new Queue(N);
  for (let i = 1; i <= N; ++i) queue.enqueue(i);
  while (queue.size() > 1) {
    queue.dequeue();
    queue.enqueue(queue.dequeue());
  }
  return queue.dequeue();
}

class Queue {
  constructor(MAX_SIZE) {
    this.MAX_SIZE = MAX_SIZE + 1;
    this.queue = new Int32Array(this.MAX_SIZE);
    this.head = 0;
    this.tail = 0;
    this._size = 0;
  }

  size() {
    return this._size;
  }

  isFull() {
    return this._size + 1 >= this.MAX_SIZE;
  }

  enqueue(data) {
    if (this.isFull()) throw Error("queue is full");
    this.queue[this.tail++] = data;
    if (this.tail >= this.MAX_SIZE) this.tail = 0;
    this._size += 1;
  }

  dequeue() {
    const data = this.queue[this.head];
    this.queue[this.head++] = 0;
    if (this.head >= this.MAX_SIZE) this.head = 0;
    this._size -= 1;
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
    console.log(solution(N));
    process.exit();
  });
