import LottoWinningNumbers from "../src/domain/LottoWinningNumbers.js";

describe('LottoWinningNumbers 클래스 테스트', () => {

  const winningNumbers = [1, 2, 3, 4, 5, 6];

  describe('당첨번호는 로또번호와 형태가 동일하다', () => {
    test('당첨번호는 로또와 형태가 동일하다', () => {

      const validBonusNumber = 7;
      expect(() => {
        new LottoWinningNumbers(winningNumbers, validBonusNumber);
      }).not.toThrow();
    })
  })

  describe('보너스번호 테스트', () => {
    test('보너스 번호와 당첨번호가 중복되면 예외가 발생한다', () => {
      expect(() => {
        const bonusNumber = 1;
        new LottoWinningNumbers(winningNumbers, bonusNumber);
      }).toThrow("[ERROR]")
    })

    test('보너스 번호가 정수가 아니면 예외가 발생한다.', () => {
      expect(() => {
        const bonusNumber = 5.5;
        new LottoWinningNumbers(winningNumbers, bonusNumber);
      }).toThrow("[ERROR]")
    })

    test.each([
      { description: '0 이하인 숫자이면 ', bonusNumber: 0 },
      { description: '46 이상인 숫자이면', bonusNumber: 46 },
    ])('보너스 번호가 $description 예외가 발생한다.', ({ bonusNumber }) => {
      expect(() => {
        new LottoWinningNumbers(winningNumbers, bonusNumber);
      }).toThrow("[ERROR]")
    })
  })
})