import Lotto from "../domain/Lotto.js";
import LottoWinningNumbers from "../domain/LottoWinningNumbers.js";
import LottoResult from "../domain/LottoResult.js";
import { pickUniqueNumbers } from "../util/pickUniqueNumbrers.js";
import { calculateLottoResult } from "./LottoResultCalculator.js";

import { LOTTO_PRICE } from "../util/constants/valuesConstants.js";

class LottoManager {
  createLotto(purchaseAmount) {
    const ticketsCount = purchaseAmount / LOTTO_PRICE;
    const lottos = [];
    for (let count = 0; count < ticketsCount; count++) {
      const randomNumbers = pickUniqueNumbers();
      lottos.push(new Lotto(randomNumbers));
    }
    return lottos;
  }

  createLottoWinningNumbers(winningNumbers, bonusNumber) {
    return new LottoWinningNumbers(winningNumbers, bonusNumber);
  }

  createLottoResult(lottos, lottoWinningNumbers) {
    const lottoResult = calculateLottoResult(lottos, lottoWinningNumbers);
    return new LottoResult(lottoResult);
  }
}

export default LottoManager;