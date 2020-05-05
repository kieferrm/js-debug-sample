const { default: getEditDistance } = require('damlev');
const { readFileSync } = require('fs');

const words = readFileSync('english-words.txt', 'utf-8').split('\n');

function slowSpellCheck(input) {
  let bestWord = '';
  let bestScore = input.length;
  for (const word of words) {
    const score = getEditDistance(input, word);
    if (score < bestScore) {
      bestWord = word;
      bestScore = score;
    }
  }
  return bestWord;
}

exports.slowSpellCheck = slowSpellCheck;