function slowMaxSlice(A) {
  const { length: N } = A;
  let result = 0;
  for (let p = 0; p < N; ++p) {
    for (let q = p; q < N; ++q) {
      let sum = 0;
      for (let i = p; i < q + 1; ++i) {
        sum += A[i];
      }
      result = Math.max(result, sum);
    }
  }
  return result;
}

function quadraticMaxSlice(A) {
  const { length: N } = A;
  let result = 0;
  for (let p = 0; p < N; ++p) {
    let sum = 0;
    for (let q = p; q < N; ++q) {
      sum += A[q];
      result = Math.max(result, sum);
    }
  }
  return result;
}

function goldenMaxSlice(A) {
  let maxEnding = 0;
  let maxSlice = 0;
  for (const n of A) {
    maxEnding = Math.max(0, maxEnding + n);
    maxSlice = Math.max(maxSlice, maxEnding);
    console.log(maxEnding, maxSlice);
  }

  return maxSlice;
}

const test1 = [5, -7, 3, 5, -10, 15, -1];

console.log(slowMaxSlice(test1));
console.log(quadraticMaxSlice(test1));
console.log(goldenMaxSlice(test1));
