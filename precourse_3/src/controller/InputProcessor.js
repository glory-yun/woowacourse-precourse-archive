import { validatePurchaseAmount } from "../util/validate.js";
import { readPurchaseAmount, readWinningNumbers, readBonusNumbers } from "../view/InputView.js";
import { parser } from "../util/parser.js";
import { printError } from "../view/OutputView.js";

class InputProcessor {
  #lottoManager;

  constructor(lottoManager) {
    this.#lottoManager = lottoManager;
  }

  async getPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await readPurchaseAmount();
        validatePurchaseAmount(purchaseAmount);
        return Number(purchaseAmount);
      } catch (error) {
        printError(error.message);
      }
    }
  }

  createLottos(purchaseAmount) {
    return this.#lottoManager.createLotto(purchaseAmount);
  }

  async createWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await readWinningNumbers();
        const parseWinningNumbers = parser(winningNumbers);
        const bonusNumber = await readBonusNumbers();

        return this.#lottoManager.createLottoWinningNumbers(
          parseWinningNumbers,
          Number(bonusNumber)
        );
      } catch (error) {
        printError(error.message);
      }
    }
  }

  createResult(lottos, lottoWinningNumbers) {
    return this.#lottoManager.createLottoResult(lottos, lottoWinningNumbers);
  }
}

export default InputProcessor;