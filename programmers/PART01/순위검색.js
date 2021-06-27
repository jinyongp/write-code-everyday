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
 * @param {string[]} info "개발언어 직군 경력 소울푸드 점수" 형식의 문자열 배열
 * @param {string[]} query "개발언어 and 직군 and 경력 and 소울푸드" 형식의 문자열 배열
 * @return {number[]} 각 문의조건에 해당하는 사람들의 숫자
 */
function solution(info, query) {
  const hashMap = info.reduce((obj, row) => {
    const data = row.split(/\s/g);
    const score = Number(data.pop());
    const key = data.join("");
    if (key in obj) obj[key].push(score);
    else obj[key] = [score];
    return obj;
  }, {});
  console.log(hashMap);
  return query.map((q) => {
    const queryToken = q.split(/\sand\s|\s/g);
    const queryScore = Number(queryToken.pop());
    const queryKey = queryToken.join("").replace(/-/g, "\\w*");
    const regex = new RegExp(queryKey);
    const scores = [];
    for (const key in hashMap) {
      if (regex.test(key)) scores.push(...hashMap[key]);
    }
    return scores.filter((score) => score >= queryScore).length;
  });
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
