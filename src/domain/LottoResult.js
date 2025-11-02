import { MATCH_COUNT_PRICE, MATCH_COUNT_KEYS } from "../util/constants/lottoConstants.js";
import { LOTTO_PRICE, RATE_ROUND_UNIT, DEFAULT_RATE } from "../util/constants/valuesConstants.js";

class LottoResult {
  #matchResult

  constructor(matchResult) {
    this.#matchResult = matchResult;
  }

  getMatchResult() {
    return { ...this.#matchResult };
  }

  calculateRateOfReturn(purchaseAmount) {

    const matchPrice = MATCH_COUNT_PRICE;
    const matchCountKeys = MATCH_COUNT_KEYS;

    const totalReturn = this.#calculateTotalReturn(matchPrice, matchCountKeys);
    const rateOfResult = Math.round((totalReturn * LOTTO_PRICE) / purchaseAmount) / RATE_ROUND_UNIT;

    return rateOfResult || DEFAULT_RATE;
  }

  #calculateTotalReturn(matchPrice, matchCountKeys) {
    const totalReturn = matchCountKeys.reduce((total, matchKey) => {
      // 당첨 개수의 상금
      const matchResultPrice = matchPrice[matchKey];
      // 당첨된 티켓 수
      const matchCount = this.#matchResult[matchKey];
      return total + (matchResultPrice * matchCount);
    }, 0);

    return totalReturn;
  }
}

export default LottoResult;