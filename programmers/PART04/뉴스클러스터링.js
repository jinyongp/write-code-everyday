// https://programmers.co.kr/learn/courses/30/lessons/17677?language=javascript

/**
 * 자카드 유사도
 * - 집합 간의 유사도를 검사하는 방법
 * - 자카드 유사도 J(A, B) = (A, B 교집합의 크기) / (A, B 합집합의 크기)  (A, B: 집합)
 * - A, B가 공집합일 경우, 자카드 유사도는 1
 *
 * - str1, str2를 두 글자씩 끊어서 다중 집합의 원소로 만든다.
 * - 특수문자나 숫자는 공백은 무시한다.
 * - 대소문자 구별을 하지 않는다.
 *
 * str1 = FRANCE => [FR, RA, AN, NC, CE]
 * str2 = french => [FR, RE, EN, NC, CH]
 *
 * str1과 str2의 교집합: [FR, NC]
 * str1과 str2의 합집합: [FR, RA, AN, NC, CE, RE, EN, CH]
 *
 * J(str1, str2) = 2 / 8 = 0.25
 *
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
function solution(str1, str2) {
  const multiSet1 = makeMultiSet(str1);
  const multiSet2 = makeMultiSet(str2);

  const int = intersection(multiSet1, multiSet2);
  const uni = union(multiSet1, multiSet2);

  const countInt = count(int);
  const countUni = count(uni);

  return countUni ? parseInt(65536 * (countInt / countUni)) : 65536;
}

function makeMultiSet(str) {
  const tempStr = str.slice(1);
  const multiSet = {};
  for (let i = 0; i < tempStr.length; ++i) {
    const item = (str[i] + tempStr[i]).toUpperCase();
    if (item.search(/[^a-zA-Z]/g) === -1) {
      multiSet[item] = multiSet[item] + 1 || 1;
    }
  }
  return multiSet;
}

function intersection(set1, set2) {
  return Object.keys(set1).reduce((result, k) => {
    if (set2[k]) result[k] = Math.min(set1[k], set2[k]);
    return result;
  }, {});
}

function union(set1, set2) {
  return Object.fromEntries(
    Object.entries({ ...set1, ...set2 }).map(([k, v]) => {
      return set1[k] && set2[k] ? [k, Math.max(set1[k], set2[k])] : [k, v];
    })
  );
}

function count(obj) {
  return Object.values(obj).reduce((sum, v) => sum + v, 0);
}

let str1, str2;

// [str1, str2] = ["FRANCE", "french"];
// console.log(solution(str1, str2)); // 16384

// [str1, str2] = ["E=M*C^2", "e=m*c^2"];
// console.log(solution(str1, str2)); // 65536

[str1, str2] = ["AAbbaa_AA", "BBB"];
console.log(solution(str1, str2)); // 13107
