const fs = require('fs');

const input = fs.readFileSync('src/centauri-prime/sample.txt', 'utf8')
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
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < T; i++) {
  const kingdom = nextLine();
  const lastLetter = kingdom.charAt(kingdom.length - 1).toLowerCase();

  if (lastLetter === 'y') {
    console.log(`Case #${i + 1}: ${kingdom} is ruled by nobody.`)
  } else if (vowels.includes(lastLetter)) {
    console.log(`Case #${i + 1}: ${kingdom} is ruled by Alice.`)
  } else {
    console.log(`Case #${i + 1}: ${kingdom} is ruled by Bob.`)
  }
}
