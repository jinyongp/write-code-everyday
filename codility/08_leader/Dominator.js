// https://app.codility.com/programmers/lessons/8-leader/dominator/

function solution(A) {
  const { length: N } = A;
  if (!N) return -1;

  let size = 1;
  let top = A[0];
  let index = 0;

  for (let i = 1; i < N; ++i) {
    if (size) {
      if (top === A[i]) size += 1;
      else size -= 1;
    } else {
      size += 1;
      top = A[i];
      index = i;
    }
  }

  let count = 0;
  for (let i = 0; i < N; ++i) {
    count += A[i] === top;
  }

  return count > Math.floor(N / 2) ? index : -1;
}
