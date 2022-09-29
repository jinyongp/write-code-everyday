function solution(N, A) {
  let max = 0;
  let temp = 0;
  const counter = Array(N + 1).fill(0);
  for (let i = 0; i < A.length; ++i) {
    if (A[i] > N) {
      temp = max;
    } else {
      counter[A[i]] = Math.max(temp + 1, counter[A[i]] + 1);
      max = Math.max(max, counter[A[i]]);
    }
  }
  const answer = counter.slice(1);
  return answer.map((num) => Math.max(num, temp));
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
