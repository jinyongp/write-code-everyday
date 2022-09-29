function solution(A) {
  const prefSum = Array(A.length).fill(0);
  const sufSum = Array(A.length).fill(0);
  for (let i = 0; i < A.length; ++i) {
    prefSum[i + 1] = prefSum[i] + A[i];
    sufSum[i + 1] = sufSum[i] + A[A.length - i - 1];
  }
  let answer = Infinity;
  for (let p = 1; p <= A.length - 1; ++p) {
    answer = Math.min(answer, Math.abs(prefSum[p] - sufSum[A.length - p]));
  }
  return answer;
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([1, 2]));
