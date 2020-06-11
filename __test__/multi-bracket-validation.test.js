'use strict';

const multiBracketValidation = require('../challenges/MultiBracketValidation/multi-bracket-validation');

describe('Multi Brackets tests', () => {
  it('Queues test ', () => {
    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('()()')).toBeTruthy();
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();

    expect(multiBracketValidation('[({}]')).toBeFalsy();
    expect(multiBracketValidation('(](')).toBeFalsy();
    expect(multiBracketValidation('{(})')).toBeFalsy();
    expect(multiBracketValidation('{')).toBeFalsy();
    expect(multiBracketValidation('[')).toBeFalsy();
    expect(multiBracketValidation('[(')).toBeFalsy();
    expect(multiBracketValidation('(')).toBeFalsy();
    expect(multiBracketValidation('({)')).toBeFalsy();
    expect(multiBracketValidation('({}')).toBeFalsy();
  });
});
