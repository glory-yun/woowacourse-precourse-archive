import Lotto from "./Lotto.js";
import LottoWinningNumbers from "./LottoWinningNumbers.js";
import LottoResult from "./LottoResult.js";
import { MATCH_COUNT_KEYS, MATCH_COUNT } from "../util/lottoConstants.js";
import { pickUniqueNumbers } from "../util/pickUniqueNumbrers.js";

class LottoManager {
  createLotto(purchaseAmount) {
    const ticketsCount = purchaseAmount / 1000;
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
    const lottoResult = this.#calculateLottoResult(lottos, lottoWinningNumbers);
    return new LottoResult(lottoResult);
  }

  //lottoResult 계산 함수들
  #calculateLottoResult(lottos, lottoWinningNumbers) {
    const { winningNumbers, bonusNumber } = lottoWinningNumbers.getLottoWinningNumbers();
    const matchResult = {};
    MATCH_COUNT_KEYS.forEach(key => matchResult[key] = 0);

    lottos.forEach(lotto => {
      const lottoNumbers = lotto.getNumbers();

      const matchCount = this.#getMatchCount(lottoNumbers, winningNumbers);
      const isMatchBonusNumber = this.#isMatchBonusNumber(lottoNumbers, bonusNumber);

      const matchCountKey = this.#getMatchKey(matchCount, isMatchBonusNumber);
      if (matchCountKey) matchResult[matchCountKey]++;
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
    if (matchCount === 6) return MATCH_COUNT.SIX;
    if (matchCount === 5 && isBonusMatch) return MATCH_COUNT.FIVE_AND_BONUS;
    if (matchCount === 5) return MATCH_COUNT.ONLY_FIVE;
    if (matchCount === 4) return MATCH_COUNT.FOUR;
    if (matchCount === 3) return MATCH_COUNT.THREE;

    return null;
  }
}

export default LottoManager;