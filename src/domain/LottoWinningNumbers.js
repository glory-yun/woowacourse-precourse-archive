import {
  validateLottoWinningNumbers
} from "../util/validate.js";

class LottoWinningNumbers {
  #lottoWinningNumbers;

  constructor(winningNumbers, bonusNumber) {
    validateLottoWinningNumbers(winningNumbers, bonusNumber);

    this.#lottoWinningNumbers = Object.freeze({
      winningNumbers: Object.freeze([...winningNumbers]),
      bonusNumber: bonusNumber
    })
  }

  getLottoWinningNumbers() {
    return this.#lottoWinningNumbers;
  }
}

export default LottoWinningNumbers;