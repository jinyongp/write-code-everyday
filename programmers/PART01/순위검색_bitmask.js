// https://programmers.co.kr/learn/courses/30/lessons/72412?language=javascript

const bits = {
  cpp: 1,
  python: 2,
  java: 3,
  frontend: 1,
  backend: 2,
  junior: 1,
  senior: 2,
  chicken: 1,
  pizza: 2,
  "-": 7,
};

/**
 * @param {string[]} info "개발언어 직군 경력 소울푸드 점수" 형식의 문자열 배열
 * @param {string[]} query "개발언어 and 직군 and 경력 and 소울푸드" 형식의 문자열 배열
 * @return {number[]} 각 문의조건에 해당하는 사람들의 숫자
 */
function solution(info, queries) {
  const fields = info.reduce((arr, data) => {
    const row = data.split(/\sand\s|\s/g);
    const score = Number(row.pop());
    const key = row.reduce((num, token) => (num << 3) + bits[token], 0);
    arr.push([key, score]);
    return arr;
  }, []);

  return queries.map((query) => {
    const row = query.split(/\sand\s|\s/g);
    const score = +row.pop();
    const mask = row.reduce((num, token) => (num << 3) + (7 - bits[token]), 0);
    return Object.entries(fields).reduce((num, [field, scores]) => {
      return num + (field & mask ? 0 : scores.length - binarySearch(scores, score));
    }, 0);
  });
}

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
