function solution(A) {
  const check = Array(A.length + 2).fill(false);
  A.forEach((num) => (check[num] = true));
  return check.slice(1).findIndex((flag) => !flag) + 1;
}

console.log(solution([2, 3, 1, 5]));
console.log(solution([1]));
