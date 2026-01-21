import { validateEmptyInput, validateRacingCountIsNaN, validateNegativeNumber, validateCarNamesLength, validateListIsEmpty } from '../src/util/validate.js';

describe('validateEmptyInput test', () => {
  test.each([
    ['a,b', ''],
    ['', 0],
    ['', '']
  ])('InValid : carName : %s , racingCount : %s', (carName, racingCount) => {
    expect(() => {
      validateEmptyInput(carName, racingCount);
    }).toThrow('[ERROR]')
  });

  test.each([
    ['a', 3],
    ['a,b', 0],
    ['glory', -1],
  ])('Valid : carName : %s , racingCount : %s', (carName, racingCount) => {
    expect(() => {
      validateEmptyInput(carName, racingCount);
    }).not.toThrow('[ERROR]')
  })
})

describe('validateRacingCountIsNaN test', () => {
  test.each([
    'a', '.', '/', '~', '  '
  ])('InValid : racingCount : %s', (racingCount) => {
    expect(() => {
      validateRacingCountIsNaN(racingCount);
    }).toThrow('[ERROR]')
  })

  test.each([
    '-1', '0', '+1', '10'
  ])('Valid : racingCount : %s', (racingCount) => {
    expect(() => {
      validateRacingCountIsNaN(racingCount);
    }).not.toThrow('[ERROR]')
  })
})

describe('validateNegativeNumber test', () => {
  test('Invalid : racintCount : -1', () => {
    expect(() => { validateNegativeNumber(-1) }).toThrow('[ERROR]')
  })

  test.each([
    0, 1, 10
  ])('Valid : racingCount : %s', (racingCount) => {
    expect(() => {
      validateNegativeNumber(racingCount);
    }).not.toThrow('[ERROR]')
  })
})

describe('validateCarNamesLength test', () => {
  test.each([
    [['123456']],
    [['a', 'b', 'InValidCarName']],
  ])('Invalidate carNameList : %s', (carNameList) => {
    expect(() => {
      validateCarNamesLength(carNameList);
    }).toThrow('[ERROR]')
  })

  test.each([
    [['12345']],
    [['a', 'b', 'valid']],
  ])('Validate carNameList : %s', (carNameList) => {
    expect(() => {
      validateCarNamesLength(carNameList);
    }).not.toThrow('[ERROR]')
  })
})

describe('validateListIsEmpty test', () => {
  test('InValid carNameList : emptyList', () => {
    const emptyList = []
    expect(() => {
      validateListIsEmpty(emptyList);
    }).toThrow('[ERROR]')
  })

  test('Valid carNameList : carNameList', () => {
    const carNameList = ['a', 'glory',]
    expect(() => {
      validateListIsEmpty(carNameList);
    }).not.toThrow('[ERROR]')
  })

  test.each([
    [['Name']],
    [['Name', 'glory']]
  ])('Valid carNameList : %s', (carNameList) => {
    expect(() => {
      validateListIsEmpty(carNameList);
    }).not.toThrow('[ERROR]')
  })
})