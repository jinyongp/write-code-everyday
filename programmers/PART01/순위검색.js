// https://programmers.co.kr/learn/courses/30/lessons/72412?language=javascript

/**
 * 개발언어, 직군, 경력, 소울푸드, 점수를 기준으로 하여 트리를 작성한다.
 *
 * "java backend junior pizza 150",
 * "python frontend senior chicken 210",
 * "python frontend senior chicken 150",
 * "cpp backend senior pizza 260",
 * "java backend junior chicken 80",
 * "python backend senior chicken 50",
 *
 *
 * [java|python|cpp|-] [backend|frontend|-] [junior|senior|-] [pizza|chicken|-]
 *
 * java backend junior pizza 100
 * -    backend junior pizza 100
 * java -       junior pizza 100
 * java backend -      pizza 100
 * java backend junior -     100
 * -    -       junior pizza 100
 * -    backend -      pizza 100
 * ...
 * -    -       -      -     100
 *
 * 2^4 = 16 가지의 분류로 경우를 나눈다.
 *
 * - 이렇게 모든 경우를 hash의 key로 하고 점수 배열을 값으로 한다.
 * - hash에 저장된 점수 값을 오름차순으로 정렬한다.
 * - queries를 순회하면서 query를 hash의 key 형태로 변환한다.
 * - hash[key]의 배열 값에서 query의 score를 이분 탐색한다.
 *
 * @param {string[]} info "개발언어 직군 경력 소울푸드 점수" 형식의 문자열 배열
 * @param {string[]} query "개발언어 and 직군 and 경력 and 소울푸드" 형식의 문자열 배열
 * @return {number[]} 각 문의조건에 해당하는 사람들의 숫자
 */
function solution(info, queries) {
  const hash = info.reduce((obj, data) => {
    const row = data.split(" ");
    const score = Number(row.pop());
    addValueToObj(obj, row.join(""), score);
    [1, 2, 3, 4].forEach((r) => {
      combinations([0, 1, 2, 3], r).forEach((comb) => {
        const tempData = [...row];
        replace(tempData, "-", comb);
        addValueToObj(obj, tempData.join(""), score);
      });
    });
    return obj;
  }, {});

  for (const key in hash) hash[key].sort((a, b) => a - b);
  return queries.map((query) => {
    const row = query.split(/\sand\s|\s/g);
    const score = Number(row.pop());
    const key = row.join("");
    if (!(key in hash)) return 0;
    const index = binarySearch(hash[key], score);
    return hash[key].length - index;
  });
}

/**
 * 배열을 값으로 하는 객체에 값을 추가한다.
 *
 * @param {Object.<string, array>} obj 목표 객체
 * @param {string} key 객체의 키
 * @param {*} value 객체의 배열 값에 추가될 값
 */
function addValueToObj(obj, key, value) {
  if (key in obj) obj[key].push(value);
  else obj[key] = [value];
}

/**
 * 조합 함수
 *
 * @param {any[]} iterable
 * @param {number} [r=iterable.length]
 * @return {any[][]} 조합의 결과
 */
function combinations(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = origin.slice(index + 1);
    return result.concat(combinations(rest, r - 1).map((c) => [value, ...c]));
  }, []);
}

/**
 * 배열로 주어진 인덱스 위치에 해당하는 배열의 값을 변경한다.
 *
 * @param {any[]} array 목표 배열
 * @param {any} value 변경될 값
 * @param {number[]} indexArray 인덱스 배열
 */
function replace(array, value, indexArray) {
  indexArray.forEach((index) => (array[index] = value));
}

/**
 * @param {number[]} arr 숫자 배열
 * @param {number} target 목표 숫자
 * @return 숫자 배열에서 목표 숫자를 탐색하고 해당 인덱스를 반환한다. 찾지 못한다면 목표 숫자보다 작은 가장 큰 인덱스 위치를 반환한다.
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid === target]) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

let info, query;

[info, query] = [
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ],
];
console.log(solution(info, query)); // [1,1,1,1,2,4]
