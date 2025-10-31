import LottoManager from "../src/domain/LottoManager.js";
import Lotto from "../src/domain/Lotto.js";
import LottoResult from "../src/domain/LottoResult.js";
import LottoWinningNumbers from "../src/domain/LottoWinningNumbers.js";

describe('LottoManager 클래스 테스트', () => {

  const lottoManager = new LottoManager();

  describe('로또 구입 금액을 입력받아 로또 객체를 생성하고 로또 배열을 반환한다.', () => {
    const purchaseAmount = 8000;
    //Lotto 객체를 담은 배열 생성
    const lottos = lottoManager.createLotto(purchaseAmount);

    test('로또 객체를 담은 배열의 길이는 (구입 금액 / 1000)이다.', () => {
      const ticketsCount = purchaseAmount / 1000;
      expect(lottos.length).toBe(ticketsCount);
    })

    test('생성된 배열은 모두 Lotto 객체로 이루어져있다.', () => {
      lottos.forEach(lotto => expect(lotto).toBeInstanceOf(Lotto));
    })
  });

  describe('당첨번호와 보너스번호를 받아 LottoWinningNumbers 객체를 생성한다.', () => {
    const testWinningNumbers = [1, 2, 3, 4, 5, 6];
    const testBonusNumber = 7;
    //LottoWinningNumbers 객체 생성
    const lottoWinningNumbers = lottoManager.createLottoWinningNumbers(testWinningNumbers, testBonusNumber);

    test('생성된 객체는 LottoWinningNumbers이다.', () => {
      expect(lottoWinningNumbers).toBeInstanceOf(LottoWinningNumbers);
    })

    test('LottoWinningNumbers 객체는 당첨번호와 보너스번호를 반환한다.', () => {
      const { winningNumbers, bonusNumber } = lottoWinningNumbers.getLottoWinningNumbers();
      expect(winningNumbers).toEqual(testWinningNumbers);
      expect(bonusNumber).toBe(testBonusNumber);
    })
  });

  describe("Lotto, LottoWinningNumbers 객체를 통하여 로또 당첨 결과를 계산한다.", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 10, 11, 12]),
    ];
    const testWinningNumbers = [1, 2, 3, 4, 5, 6];
    const testBonusNumber = 7;
    const lottoWinningNumbers = lottoManager.createLottoWinningNumbers(testWinningNumbers, testBonusNumber);

    //Lotto, LottoWinningNumbers 객체를 통하여 LottoResult 객체 생성
    const lottoResult = lottoManager.createLottoResult(lottos, lottoWinningNumbers);

    test("결과 객체는 LottoResult 객체이다.", () => {
      expect(lottoResult).toBeInstanceOf(LottoResult);
    });

    test("결과로, 6개 일치 1개, 3개 일치 1개를 반환한다.", () => {
      const testResult = {
        matchThree: 1,
        matchFour: 0,
        matchOnlyFive: 0,
        matchFiveAndBonus: 0,
        matchSix: 1
      };
      expect(lottoResult.getMatchResult()).toEqual(testResult);
    })
  });

  describe("로또 당첨 결과를 바탕으로 LottoResult 객체를 생성한다.", () => {
    const matchResult = {
      matchThree: 1,
      matchFour: 0,
      matchOnlyFive: 0,
      matchFiveAndBonus: 0,
      matchSix: 0,
    };
    //LottoResult 객체 생성
    const lottoResult = new LottoResult(matchResult);

    test("LottoResult 객체는 로또 당첨 결과를 반환한다.", () => {
      expect(lottoResult).toBeInstanceOf(LottoResult);
      expect(lottoResult.getMatchResult()).toEqual(matchResult);
    });

    test("LottoResult 객체는 총 수익률을 계산한다.", () => {
      const purchaseAmount = 5000;
      expect(lottoResult.calculateRateOfReturn(purchaseAmount)).toBe(100);
    });
  });
})