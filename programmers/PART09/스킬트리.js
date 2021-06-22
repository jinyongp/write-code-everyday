// https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript

/**
 * 스킬트리에 있는 스킬 중 선행 스킬 순서에서 언급된 스킬만 뽑아낸 뒤, 선행 스킬 순서로 시작하는지 여부로 확인한다.
 *
 * skill = CBD
 * skillTrees = ["BACDE", "CBADF", "AECB", "BDA"]
 *
 * BACDE => BCD (X)
 * CBADF => CBD (O)
 * AECB  => CB (O)
 * BDA   => BD (X)
 *
 *
 * @param {string} skill 선행 스킬 순서
 * @param {string[]} skillTrees 유저들이 만든 스킬트리
 * @return {number} 가능한 스킬트리의 개수
 */
function solution(skill, skillTrees) {
  return skillTrees.reduce((result, skillTree) => {
    const filtered = [...skillTree].filter((s) => skill.includes(s)).join("");
    result += skill.startsWith(filtered);
    return result;
  }, 0);
}

let skill, skillTrees;

[skill, skillTrees] = ["CBD", ["BACDE", "CBADF", "AECB", "BDA"]];
console.log(solution(skill, skillTrees)); // 2
