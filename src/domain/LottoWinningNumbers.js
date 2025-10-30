import {
  validateInputIsEmpty,
  validateIsInteger,
  validateNumbersLength,
  validateNumbersDuplicate,
  validateRange,
  validateIsIncludeNumber
} from "../util/validate.js";

class LottoWinningNumbers {
  // object = {winningNumbers : winningNumbers , bonusNumber : bonusNumber}
  #lottoWinningNumbers;

  constructor(winningNumbers, bonusNumber) {
    this.#validate(winningNumbers, bonusNumber);

    this.#lottoWinningNumbers = Object.freeze({
      winningNumbers: Object.freeze([...winningNumbers]),
      bonusNumber: bonusNumber
    })
  }

  #validate(winningNumbers, bonusNumber) {
    validateNumbersLength(winningNumbers);
    validateNumbersDuplicate(winningNumbers);
    winningNumbers.forEach(winningNumber => {
      validateIsInteger(winningNumber);
      validateRange(winningNumber);
    });
    validateIsIncludeNumber(winningNumbers, bonusNumber);
    validateIsInteger(bonusNumber);
    validateRange(bonusNumber);
  }

  getLottoWinningNumbers() {
    return this.#lottoWinningNumbers;
  }
}

export default LottoWinningNumbers;