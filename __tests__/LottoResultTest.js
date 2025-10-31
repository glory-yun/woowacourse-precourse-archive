import LottoResult from "../src/domain/LottoResult.js"

describe('LottoResult 클래스 테스트', () => {
  const matchResult = {
    'matchThree': 1,
    'matchFour': 0,
    'matchOnlyFive': 0,
    'matchFiveAndBonus': 0,
    'matchSix': 0
  }
  const lottoResult = new LottoResult(matchResult)

  test('LottoResult 클래스는 로또의 당첨 결과를 반환한다.', () => {
    expect(lottoResult.getMatchResult()).toEqual(matchResult);
  })

  test.each([
    { purchaseAmount: 5000, RateOfResult: 100 },
    { purchaseAmount: 8000, RateOfResult: 62.5 },
    { purchaseAmount: 10000, RateOfResult: 50 }
  ])('LottoResult 로또의 총 수익률을 계산해서 반환한다.', ({ purchaseAmount, RateOfResult }) => {
    expect(lottoResult.calculateRateOfReturn(purchaseAmount)).toBe(RateOfResult);
  })
})