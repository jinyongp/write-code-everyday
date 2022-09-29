/**
 * 버블 정렬
 *
 * [5, 3, 12, 1, 5, 6, 2, 4]
 *
 *
 */
function bubbleSort(numbers) {
  const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]]);

  for (let i = 0; i < numbers.length; ++i) {
    for (let j = 0; j < numbers.length; ++j) {
      if (j > i) swap(numbers, i, j);
    }
  }

  return numbers;
}

const result = bubbleSort([5, 3, 12, 1, 5, 6, 2, 4]);
console.log(result);
