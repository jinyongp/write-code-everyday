/**
 * 순열([1, 2, 3], 2)
 * -> [ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ] ]
 *
 * @param {any[]} iterable 배열
 * @param {number} r 결과의 길이 (기본값은 iterable의 길이)
 * @return {any[]} 순열 결과
 */
function 순열(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    return result.concat(순열(rest, r - 1).map((p) => [value, ...p]));
  }, []);
}

console.log(순열([1, 2, 3], 2));

/**
 * 조합([1, 2, 3], 2)
 * -> [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
 *
 * @param {any[]} iterable 배열
 * @param {number} r 결과의 길이 (기본값은 iterable의 길이)
 * @return {any[]} 조합 결과
 */
function 조합(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = origin.slice(index + 1);
    return result.concat(조합(rest, r - 1).map((c) => [value, ...c]));
  }, []);
}

console.log(조합([1, 2, 3], 2));

/**
 * 중복순열([1, 2, 3], 2)
 * -> [
 *   [ 1, 1 ], [ 1, 2 ],
 *   [ 1, 3 ], [ 2, 1 ],
 *   [ 2, 2 ], [ 2, 3 ],
 *   [ 3, 1 ], [ 3, 2 ],
 *   [ 3, 3 ]
 * ]
 *
 * @param {any[]} iterable 배열
 * @param {number} r 결과의 길이 (기본값은 iterable의 길이)
 * @return {any[]} 중복순열 결과
 */
function 중복순열(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    return result.concat(중복순열(origin, r - 1).map((p) => [value, ...p]));
  }, []);
}

console.log(중복순열([1, 2, 3], 2));

/**
 * 중복조합([1, 2, 3], 2)
 * -> [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 2 ], [ 2, 3 ], [ 3, 3 ] ]
 *
 * @param {any[]} iterable 배열
 * @param {number} r 결과의 길이 (기본값은 iterable의 길이)
 * @return {any[]} 중복조합 결과
 */
function 중복조합(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    return result.concat(중복조합(origin.slice(index), r - 1).map((c) => [value, ...c]));
  }, []);
}

console.log(중복조합([1, 2, 3], 2));
