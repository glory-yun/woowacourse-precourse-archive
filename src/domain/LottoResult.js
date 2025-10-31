class LottoResult {
  #matchResult

  constructor(matchResult) {
    this.#matchResult = matchResult;
  }

  calculateRateOfReturn(purchaseAmount) {
    const matchPrice = {
      'matchThree': 5000,
      'matchFour': 50000,
      'matchOnlyFive': 1500000,
      'matchFiveAndBonus': 30000000,
      'matchSix': 2000000000
    };
    const matchResultKeys = Object.keys(this.#matchResult);

    const totalReturn = matchResultKeys.reduce((total, matchKey) => {
      const matchResultPrice = matchPrice[matchKey]; // 당첨 개수의 상금
      const matchCount = this.#matchResult[matchKey]; // 당첨된 티켓 수
      return total + (matchResultPrice * matchCount);
    }, 0);

    const RateOfResult = Math.round((totalReturn * 1000) / purchaseAmount) / 10;

    return RateOfResult;
  }

  getMatchResult() {
    return this.#matchResult;
  }

}

export default LottoResult;