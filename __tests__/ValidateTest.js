import {
  validateInputIsEmpty,
  validateIsInteger,
  validateNumbersLength,
  validateNumbersDuplicate,
  validateRange,
  validateIsIncludeNumber,
  validateDivideThousand
} from "../src/util/validate.js";

describe('Validate 테스트', () => {
  test('로또 구입 금액 문자열이 비어있는 경우 예외가 발생한다.', () => {
    expect(() => {
      const input = '';
      validateInputIsEmpty(input);
    }).toThrow("[ERROR]")
  })

  test.each([
    { input: '123a' },
    { input: '12.3' },
    { input: 'abc' }
  ])('입력된 문자가 정수가 아닐 경우 예외가 발생한다. input : $input', ({ input }) => {
    expect(() => validateIsInteger(input)).toThrow('[ERROR]');
  });

  test('뽑힌 숫자들이 6개가 아닌경우 예외가 발생한다.', () => {
    expect(() => {
      const numbers = [1, 2, 3, 4, 5, 6, 7];
      validateNumbersLength(numbers);
    }).toThrow("[ERROR]")
  })

  test('로또 숫자들이 중복된 경우 예외가 발생한다.', () => {
    expect(() => {
      const numbers = [1, 2, 3, 4, 5, 5];
      validateNumbersDuplicate(numbers);
    }).toThrow("[ERROR]")
  })

  test('로또 숫자 범위가 1~45 사이에 있지 않을 경우 예외가 발생한다.', () => {
    expect(() => {
      const input = 0;
      validateRange(input);
    }).toThrow("[ERROR]")
  })

  test('보너스 번호가 당첨번호와 중복될 경우 예외가 발생한다.', () => {
    expect(() => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const input = 1;
      validateIsIncludeNumber(numbers, input);
    }).toThrow("[ERROR]")
  })

  test('로또 구입 금액은 1000으로 나누어 떨어져야한다.', () => {
    expect(() => {
      const price = 2500;
      validateDivideThousand(price);
    }).toThrow("[ERROR]")
  })

  test('성공적으로 검증에 통과했다.', () => {
    expect(() => {
      validateInputIsEmpty('1,2,3');
      validateIsInteger('123');
      validateNumbersLength([1, 2, 3, 4, 5, 6]);
      validateNumbersDuplicate([1, 2, 3, 4, 5, 6]);
      validateRange(1);
      validateIsIncludeNumber([1, 2, 3, 4, 5, 6], 7);
      validateDivideThousand(2000);
    }).not.toThrow();
  });
})