const fs = require('fs');

const input = fs.readFileSync('src/sample-2022-01/sample.txt', 'utf8')
  .trim()
  .split('\n');

let currentLine = 0;
const nextLine = () => {
  if (currentLine >= input.length) return null;

  const result = input[currentLine].trim();
  currentLine++;
  return result;
};

const T = Number(nextLine());
const testCases = new Array(T);

for (let i = 0; i < T; i++) {
  const [N, K] = nextLine().split(' ').map(Number);
  const data = nextLine().split(' ').map(Number);

  testCases[i] = { N, K, data };
}

const solve = ({ N, K, data }) => {
  const sum = data.reduce((a, b) => a + b);
  return sum % K;
};

testCases.forEach((input, i) => {
  const result = solve(input);
  console.log(`Case #${i + 1}: ${result}`);
});
