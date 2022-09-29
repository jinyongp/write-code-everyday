// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
  let count = 0;
  let answer = 0;
  for (const bit of N.toString(2)) {
    if (!+bit) count += 1;
    else [answer, count] = [Math.max(answer, count), 0];
  }
  return answer;
}

console.log(solution(1041));
