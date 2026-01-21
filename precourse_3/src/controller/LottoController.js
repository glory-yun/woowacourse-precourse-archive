import {
  printLottoResult,
  printLottos,
  printPurchaseAmount,
} from "../view/OutputView.js";
import LottoManager from "../service/LottoManager.js";
import InputProcessor from "./InputProcessor.js";

class LottoController {
  #inputProcessor;

  constructor() {
    const lottoManager = new LottoManager();
    this.#inputProcessor = new InputProcessor(lottoManager);
  }

  async start() {
    // 로또 구매 및 생성
    const purchaseAmount = await this.#inputProcessor.getPurchaseAmount();
    const lottos = this.#inputProcessor.createLottos(purchaseAmount);
    printPurchaseAmount(purchaseAmount);
    printLottos(lottos);

    // 당첨 번호 처리
    const lottoWinningNumbers = await this.#inputProcessor.createWinningNumbers();

    // 결과 계산 및 출력
    const lottoResult = this.#inputProcessor.createResult(lottos, lottoWinningNumbers);
    const matchResult = lottoResult.getMatchResult();
    const rateOfResult = lottoResult.calculateRateOfReturn(purchaseAmount);
    printLottoResult(matchResult, rateOfResult);
  }
}

export default LottoController;