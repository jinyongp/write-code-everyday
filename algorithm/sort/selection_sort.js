/**
 * 선택정렬
 *
 * 가장 작은 순으로 선택하여 좌측부터 쌓아가는 방식
 *
 * [5, 3, 12, 1, 5, 6, 2, 4]
 *
 * 1 -> [5, 3, 12, 1, 5, 6,  2, 4]
 * 1 -> [1, 3, 12, 5, 5, 6,  2, 4]
 * 2 -> [1, 2, 12, 5, 5, 6,  3, 4]
 * 3 -> [1, 2,  3, 5, 5, 6, 12, 4]
 * 4 -> [1, 2,  3, 4, 5, 6, 12, 5]
 * 5 -> [1, 2,  3, 4, 5, 6, 12, 5]
 * 5 -> [1, 2,  3, 4, 5, 5, 12, 6]
 * 6 -> [1, 2,  3, 4, 5, 5, 6, 12]
 */
function selectionSort(numbers) {
  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

  for (let i = 0, minIndex = i; i < numbers.length - 1; ++i) {
    for (let j = i; j < numbers.length; ++j) {
      if (numbers[minIndex] > numbers[j]) minIndex = j;
    }
    console.log(JSON.stringify(numbers));
    swap(numbers, i, minIndex);
  }

  return numbers;
}

const numbers = [5, 3, 12, 1, 5, 6, 2, 4];
console.log(selectionSort(numbers));
