function solution(X, A) {
  const set = new Set(Array.from({ length: X }).map((_, i) => i + 1));
  for (let i = 0; i < A.length; ++i) {
    set.delete(A[i]);
    if (!set.size) return i;
  }
  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
