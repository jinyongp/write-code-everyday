// https://programmers.co.kr/learn/courses/30/lessons/42890?language=javascript

/**
 * @param {Set} set
 * @return {boolean}
 */
Set.prototype.isSubset = function (set) {
  return [...set].every((item) => [...this].includes(item));
};

/**
 * 후보키: 관계 데이터베이스에서 relation의 튜플을 유일하게 식별할 수 있는 속성 또는 속성의 집합
 * - 유일성: relation에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
 * - 최소성: relation의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.
 *
 *   학번     이름       전공       학년
 * ["100", "ryan",   "music",    "2"],
 * ["200", "apeach", "math",     "2"],
 * ["300", "tube",   "computer", "3"],
 * ["400", "con",    "computer", "4"],
 * ["500", "muzi",   "music",    "3"],
 * ["600", "apeach", "music",    "2"],
 *
 * 유일성을 가지는 속성: 학번, ["이름", "전공"]
 * 이름과 학년의 값은 유일하지 않음
 * ["이름", "전공", "학년"]은 최소가 아님
 *
 * 모든 조합의 속성에 대해 중복되는 값이 존재하는지 그리고 부분집합은 아닌지 확인한다. unique 함수, isSubset 함수
 * 중복되지 않는 속성을 Set에 추가한다.
 *
 * @param {string[][]} relation 관계 데이터베이스
 * @return {number} relation에서 후보 키의 개수
 */
function solution(relation) {
  const keys = new Set();
  const colIndex = [...Array(relation[0].length).keys()];
  for (let i = 1; i <= colIndex.length; ++i) {
    for (const tuple of combinations(colIndex, i)) {
      const set = new Set(tuple);
      if (unique(relation, ...set) && !isSubset(keys, set)) {
        keys.add(set);
      }
    }
  }
  return keys.size;
}

/**
 * 유일성 판별 함수
 *
 * 입력한 튜플이 유일하면 true, 아니면 false를 반환
 * relation에서 하나의 열의 데이터 개수가 중복을 제거했을 때 개수와 같다면 유일하다고 할 수 있다.
 * 여러 열이 입력됐을 경우, 하나의 문자열로 합쳐서 중복을 확인한다.
 *
 * @param {string[][]} relation
 * @return {boolean}
 */
function unique(relation, ...colIndex) {
  const { length } = relation;
  const set = new Set();
  relation.forEach((row) => set.add(colIndex.reduce((str, index) => str + row[index], "")));
  return length === set.size;
}

/**
 * 최소성 판별 함수
 *
 * 조합된 set이 keys에 존재하는 집합 중에서 부분집합이 된다면 true를 반환한다.
 *
 * @param {Set<Set<string>>} keys
 * @param {Set<string>} set
 * @return {boolean}
 */
function isSubset(keys, set) {
  for (const key of keys) {
    if (set.isSubset(key)) return true;
  }
  return false;
}

/**
 * 조합 생성 함수
 *
 * @param {any[]} iterable
 * @param {number} [r=iterable.length]
 * @return {any[][]}
 */
function combinations(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = origin.slice(index + 1);
    return result.concat(combinations(rest, r - 1).map((comb) => [value, ...comb]));
  }, []);
}

let relation;

[relation] = [
  [
    ["a", 1, "aaa", "c", "ng"],
    ["b", 1, "bbb", "c", "g"],
    ["c", 1, "aaa", "d", "ng"],
    ["d", 2, "bbb", "d", "ng"],
  ],
];
console.log(solution(relation)); // 2
