import { validateEmptyInput, validateRacingCountIsNaN } from '../src/util/validate.js';

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