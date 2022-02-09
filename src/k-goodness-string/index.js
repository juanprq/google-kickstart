const fs = require('fs');

const input = fs.readFileSync('src/k-goodness-string/sample-1.txt', 'utf8')
  .trim()
  .split('\n');
const [firstLine, ...lines]= input;

const nTestCases = Number(firstLine);

const testCases = [];
for (let i = 0; i < nTestCases; i++) {
  const line1 = lines[i * 2].split(' ');
  const s = lines[i * 2 + 1].trim();

  testCases.push({ n: Number(line1[0]), k: Number(line1[1]), s });
}

const calculateKScore = (string) => {
  let score = 0;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) score++;
  }

  return score;
};

testCases.forEach((testCase, i) => {
  const { n, k, s } = testCase;
  const score = calculateKScore(s);
  const operations = Math.abs(k - score);

  console.log(`Case #${i + 1}: ${operations}`);
});
