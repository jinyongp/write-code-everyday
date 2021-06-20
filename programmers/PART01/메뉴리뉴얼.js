// https://programmers.co.kr/learn/courses/30/lessons/72411?language=javascript

Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));
Object.reduce = (obj, callbackFn, init) => Object.entries(obj).reduce(callbackFn, init);

/**
 * course와 함께 orders를 순회하면서 단품 메뉴로 가능한 구성의 조합을 모두 구한다.
 * 구한 조합을 카운팅하여 1 이하의 조합을 필터링
 *
 * 메뉴 조합 중 각 개수 별로 가장 많이 요청된 조합만 남겨두고 전부 없앤다.
 *
 * @param {string[]} orders 손님들이 주문한 단품메뉴
 * @param {number[]} course 단품메뉴의 개수
 * @return {string[]} 추가하게 될 코스요리의 메뉴 구성
 */
function solution(orders, course) {
  const combs = {};
  const maxCombs = course.reduce((result, key) => ({ ...result, [key]: 0 }), {});
  for (const c of course) {
    for (const order of orders) {
      combinations([...order].sort(), c).forEach((comb) => {
        comb = comb.join("");
        combs[comb] = combs[comb] + 1 || 1;
      });
    }
  }
  const filteredCombs = Object.filter(combs, ([key, value]) => {
    maxCombs[key.length] = Math.max(maxCombs[key.length], value);
    return value > 1;
  });
  return Object.reduce(
    filteredCombs,
    (obj, [k, v]) => obj.concat(maxCombs[k.length] === v ? k : []),
    []
  ).sort();
}

function combinations(iterable, r = iterable.length) {
  if (r === 1) return iterable.map((value) => [value]);
  return iterable.reduce((result, value, index, origin) => {
    const rest = origin.slice(index + 1);
    return result.concat(combinations(rest, r - 1).map((comb) => [value, ...comb]));
  }, []);
}

let orders, course;

[orders, course] = [
  ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
  [2, 3, 4],
];
console.log(solution(orders, course)); // ["AC", "ACDE", "BCFG", "CDE"]
[orders, course] = [
  ["XYZ", "XWY", "WXA"],
  [2, 3, 4],
];
console.log(solution(orders, course)); // ["AC", "ACDE", "BCFG", "CDE"]
