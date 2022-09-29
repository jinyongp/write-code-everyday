function solution(A) {
  const check = Array(Math.max(...A) + 2).fill(false);
  A.forEach((num) => num >= 0 && (check[num] = true));
  return check.slice(1).indexOf(false) + 1 || 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
