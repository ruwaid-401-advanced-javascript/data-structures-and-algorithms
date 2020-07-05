'use strict';

function repeatedWord(str) {
  let words = {};
  let word = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && str[i] !== ',') {
      word += str[i];
    } else {
      if (words[word]) {
        return word;
      }
      words[word.toLowerCase()] = word;
      word = '';
    }
  }
  return 'none';
}

module.exports = repeatedWord;