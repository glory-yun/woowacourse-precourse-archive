import { MATCH_PRICE, MATCH_KEYS } from "../util/lottoConstants.js";

class LottoResult {
  #matchResult

  constructor(matchResult) {
    this.#matchResult = matchResult;
  }

  #calculateTotalReturn(matchPrice, matchResultKeys) {
    const totalReturn = matchResultKeys.reduce((total, matchKey) => {
      // 당첨 개수의 상금
      const matchResultPrice = matchPrice[matchKey];
      // 당첨된 티켓 수
      const matchCount = this.#matchResult[matchKey];
      return total + (matchResultPrice * matchCount);
    }, 0);

    return totalReturn;
  }

  calculateRateOfReturn(purchaseAmount) {

    const matchPrice = MATCH_PRICE;
    const matchResultKeys = MATCH_KEYS;

    const totalReturn = this.#calculateTotalReturn(matchPrice, matchResultKeys);
    const rateOfResult = Math.round((totalReturn * 1000) / purchaseAmount) / 10;

    return rateOfResult;
  }

  getMatchResult() {
    return this.#matchResult;
  }

}

export default LottoResult;