// // https://www.acmicpc.net/problem/1717

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 초기 집합을 반환한다. (배열)
 * 각 집합은 유일한 원소 하나만 갖는 집합이다.
 *
 * 배열의 인덱스는 노드를 의미한다.
 * 배열의 값은 노드가 가리키는 부모 노드를 의미한다.
 * 모든 노드는 각 집합의 루트 노드가 되고, 그러므로 배열의 인덱스와 값은 모두 같다.
 */
function makeSet(n) {
  return Array.from({ length: n + 1 }).map((_, index) => index);
}

/**
 * x가 속한 집합의 부모 노드를 반환한다.
 *
 * 인덱스와 값이 같아지면 루트 노드이다.
 * 배열의 값은 부모 노드를 가리키고 있으므로 이를 따라가면 루트 노드까지 도달할 수 있다.
 *
 * 매번 따라가는 건 비효율적일 수 있다.
 * 자식 노드가 부모 노드에 연결되어 있든, 루트 노드에 연결되어 있든 한 집합에 속하는 건 같다.
 * 자식 노드가 항상 루트 노드를 참조할 수 있도록 하면 더욱 효율적으로 탐색할 수 있다.
 */
function find(set, x) {
  if (set[x] === x) return x;
  set[x] = find(set, set[x]);
  return set[x];
}

/**
 * x 집합과 y 집합을 합한다.
 *
 * x 집합의 루트 노드를 y 집합의 루트 노드로 바꾸면 된다.
 */
function union(set, x, y) {
  setX = find(set, x);
  setY = find(set, y);
  set[setY] = setX;
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    /**
     * n: 초기 집합의 수는 n + 1
     * m: 입력으로 주어지는 연산의 개수
     */
    const [n, m] = lines.shift().split(" ").map(Number);

    /**
     * init 과정
     */
    const set = makeSet(n);

    /**
     * 0 a b 는 합집합을 의미한다. a가 포함되어 있는 집합과 b가 포함되어 있는 집합을 합한다.
     * 1 a b 는 두 원소가 같은 집합에 포함되어 있는지 확인하는 연산을 한다.
     *
     * 1로 시작(탐색)하는 입력에 대하여 같은 집합에 포함되어 있으면 YES(yes), 되어 있지 않으면 NO(no)를 출력한다.
     */
    lines.forEach((line) => {
      const [flag, a, b] = line.split(" ").map(Number);
      console.log(JSON.stringify(set));
      if (flag) console.log(find(set, a) === find(set, b) ? "YES" : "NO");
      else union(set, a, b);
    });
  });
