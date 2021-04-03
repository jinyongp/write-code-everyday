const getAllCases = (num, repeat) => {
  const array = [...Array(num ** repeat).keys()];
  // const array = Array.from({ length: (num ** repeat) }, (_, index) => index);
  // const array = Array(num ** repeat).fill(0).map((x, y) => x + y);
  return array.map(index => index.toString(num).padStart(repeat, '0'));
};
const getRockPaperScissors = (i) => ['rock', 'paper', 'scissors'][i];
const rockPaperScissors = (num) => getAllCases(3, num || 3).map(c => [...c].map(getRockPaperScissors));


// 0: rock, 1: paper, 2: scissors
// '000' rock rock rock
// '001' rock rock paper
// [0, 0, 2] rock rock scissors
