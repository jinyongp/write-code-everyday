function solution(A, K) {
  if (!A.length) return A;
  while (K--) A.unshift(A.pop());
  return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
