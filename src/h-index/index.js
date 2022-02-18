const fs = require('fs');

const input = fs.readFileSync('src/h-index/sample.txt', 'utf8')
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

const calculateScore = (papers) => {
  const scores = new Array(papers.length);

  let reminders = [];
  let currentScore = 0;
  for (let i = 0; i < papers.length; i++) {
    if (papers[i] > currentScore) reminders.push(papers[i]);
    reminders = reminders.filter(p => p > currentScore);

    if (reminders.length > currentScore) currentScore++;
    scores[i] = currentScore;
  }

  return scores;
};

for (let i = 0; i < T; i++) {
  const n = Number(nextLine().trim());
  const papers = nextLine().split(' ').map(Number);

  const result = calculateScore(papers).join(' ');
  console.log(`Case #${i + 1}: ${result}`);
}
