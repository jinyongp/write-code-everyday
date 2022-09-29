function solution(graph, start) {
  const visited = Array(Object.keys(graph).length).fill(false);
}

const graph = {
  1: [3, 2],
  2: [3, 1, 4, 5],
  3: [6, 4, 2, 1],
  4: [3, 2],
  5: [2],
  6: [3],
};

console.log(solution(graph, 1));
