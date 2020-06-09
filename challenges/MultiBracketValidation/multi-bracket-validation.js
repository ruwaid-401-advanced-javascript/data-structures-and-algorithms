'use strict';

function multiBracketValidation(input) {
  let str = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') str += input[i];

    if (input[i] === '}')
      if (str[str.length - 1] === '{') str = str.slice(0, -1);


    if (input[i] === ')') {
      if (str[str.length - 1] === '(') str = str.slice(0, -1);
    }

    if (input[i] === ']') {
      if (str[str.length - 1] === '[') str = str.slice(0, -1);
    }

  }

  if (str.length === 0) return true;
  return false;

}

module.exports = multiBracketValidation;