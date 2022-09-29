function solution(A) {
  const check = Array(A.length + 1).fill(false);
  A.forEach((num) => (check[num] = true));
  return +check.slice(1).every((num) => num);
}

console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 3]));
