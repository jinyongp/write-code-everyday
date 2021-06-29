const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 *
 *
 * @param {}
 * @return {}
 */
function solution() {
  
}

const lines = [];
reader
  .on("line", (line) => {
    lines.push(line.trim());
  })
  .on("close", () => {

    console.log(solution());
    process.exit();
  });
