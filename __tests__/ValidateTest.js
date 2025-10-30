describe('Validate 테스트', () => {
  test('로또 구입 금액 문자열이 비어있는 경우 예외가 발생한다.', () => {
    expect(() => {
      const input = '';
      validateInputIsEmpty(input);
    }).toThrow("[ERROR]")
  })

  test('입력된 숫자들에 문자가 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      const input = '123a';
      validateIsNumber(input);
    }).toThrow("[ERROR]")
  })

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
      const numbers = [0, 1, 2, 3, 4, 5];
      validateRange(numbers);
    }).toThrow("[ERROR]")
  })

  test('성공적으로 검증에 통과했다.', () => {
    expect(() => {
      validateInputIsEmpty('1,2,3');
      validateIsNumber('123');
      validateNumbersLength([1, 2, 3, 4, 5, 6]);
      validateNumbersDuplicate([1, 2, 3, 4, 5, 6]);
      validateRange([1, 2, 3, 4, 5, 45]);
    }).not.toThrow();
  });
})