import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoWinningNumbers from "./LottoWinningNumbers.js";
import LottoResult from "./LottoResult.js";
import { MATCH_KEYS } from "../util/lottoConstants.js";

class LottoManager {
  createLotto(purchaseAmount) {
    const ticketsCount = purchaseAmount / 1000;
    const lottos = [];
    for (let count = 0; count < ticketsCount; count++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(new Lotto(randomNumbers));
    }
    return lottos;
  }

  createLottoWinningNumbers(winningNumbers, bonusNumber) {
    return new LottoWinningNumbers(winningNumbers, bonusNumber);
  }

  createLottoResult(lottos, lottoWinningNumbers) {
    const lottoResult = this.#calculateLottoResult(lottos, lottoWinningNumbers);
    return new LottoResult(lottoResult);
  }

  //lottoResult 계산 함수들
  #calculateLottoResult(lottos, lottoWinningNumbers) {
    const { winningNumbers, bonusNumber } = lottoWinningNumbers.getLottoWinningNumbers();
    const matchResult = {};
    MATCH_KEYS.forEach(key => matchResult[key] = 0);

    lottos.forEach(lotto => {
      const lottoNumbers = lotto.getNumbers();

      const matchCount = this.#getMatchCount(lottoNumbers, winningNumbers);
      const isMatchBonusNumber = this.#isMatchBonusNumber(lottoNumbers, bonusNumber);

      const matchKey = this.#getMatchKey(matchCount, isMatchBonusNumber);
      if (matchKey) matchResult[matchKey]++;
    });

    return matchResult;
  }

  #getMatchCount(lottoNumbers, winningNumbers) {
    const matchNumbers = lottoNumbers.filter(number => winningNumbers.includes(number));
    return matchNumbers.length;
  }

  #isMatchBonusNumber(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }

  #getMatchKey(matchCount, isBonusMatch) {
    if (matchCount === 6) return "matchSix";
    if (matchCount === 5 && isBonusMatch) return "matchFiveAndBonus";
    if (matchCount === 5) return "matchOnlyFive";
    if (matchCount === 4) return "matchFour";
    if (matchCount === 3) return "matchThree";

    return null;
  }
}

export default LottoManager;