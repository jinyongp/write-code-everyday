function solution(A) {
  A.sort((a, b) => a - b);
  console.log(A);
  for (let i = 0; i < A.length - 1; i += 2) {
    if (A[i] !== A[i + 1]) return A[i];
  }
  return A[A.length - 1];
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
