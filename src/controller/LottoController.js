import {
  readPurchaseAmount,
  readWinningNumbers,
  readBonusNumbers
} from "../view/InputView.js";
import {
  validatePurchaseAmount,
} from "../util/validate.js";
import {
  printLottoResult,
  printLottos,
  printPurchaseAmount,
  printError
} from "../view/OutputView.js";
import LottoManager from "../service/LottoManager.js";
import { parser } from "../util/parser.js";


class LottoController {
  #lottoManager;

  constructor() {
    this.#lottoManager = new LottoManager();
  }

  async start() {
    //검증된 로또 객체를 생성
    const purchaseAmount = await this.#getValidPurchaseAmount();
    const lottos = this.#getValidLottos(purchaseAmount);
    printPurchaseAmount(purchaseAmount);
    printLottos(lottos);

    //검증된 당첨번호, 보너스번호가 있는 객체 생성
    const lottoWinningNumbers = await this.#getValidLottoWinningNumbers();

    //검증된 로또 결과 객체 생성
    const lottoResult = this.#getValidLottoResult(lottos, lottoWinningNumbers);

    //당첨 결과 출력 
    const matchResult = lottoResult.getMatchResult();
    const rateOfResult = lottoResult.calculateRateOfReturn(purchaseAmount);
    printLottoResult(matchResult, rateOfResult);
  }

  async #getValidPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await readPurchaseAmount();
        validatePurchaseAmount(purchaseAmount);
        return Number(purchaseAmount);
      }
      catch (error) {
        printError(error.message);
      }
    }
  }

  #getValidLottos(purchaseAmount) {
    const lottos = this.#lottoManager.createLotto(purchaseAmount);
    return lottos
  }

  async #getValidLottoWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await readWinningNumbers();

        const parseWinningNumbers = parser(winningNumbers);
        const bonusNumber = await readBonusNumbers();
        const lottoWinningNumbers = this.#lottoManager.createLottoWinningNumbers(parseWinningNumbers, Number(bonusNumber));

        return lottoWinningNumbers;
      }
      catch (error) {
        printError(error.message);
      }
    }
  }

  #getValidLottoResult(lottos, lottoWinningNumbers) {
    const lottoResult = this.#lottoManager.createLottoResult(lottos, lottoWinningNumbers);
    return lottoResult
  }
}

export default LottoController;
