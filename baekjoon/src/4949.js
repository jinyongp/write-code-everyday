// https://www.acmicpc.net/problem/4949

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {
    /**
     * ()와 [] 2종류의 괄호가 균형을 이뤄야한다.
     *
     * parens = [] // 괄호를 담는 스택
     *
     * 문자열에서 문자를 순회하며 스택에 각 괄호에 대해 추가한다.
     *
     * 스택의 top에 여는 괄호가 있는데 매칭되는 닫는 괄호가 나오면 top을 제거한다.
     * 순회를 마쳤을 때, parens, squares가 전부 비어있어야 한다. 그럼 yes 출력, 아니면 no 출력
     */
    lines.pop(); // 마지막 입력 제거
    lines.forEach((line) => {
      const parens = [];
      for (const ch of line) {
        if (["(", ")", "[", "]"].includes(ch)) {
          const top = parens[parens.length - 1];
          if ([")", "]"].includes(ch)) {
            if (top === "(" && ch === ")") parens.pop();
            else if (top === "[" && ch === "]") parens.pop();
            else parens.push(ch);
          } else {
            parens.push(ch);
          }
        }
      }
      console.log(parens);
      console.log(parens.length ? "no" : "yes");
    });
  });
