import { Console } from "@woowacourse/mission-utils";
import { MATCH_COUNT_KEYS, MATCH_COUNT_PRICE, MATCH_COUNT } from "../util/lottoConstants.js";
import { formatMatchPrice, formatRateOfResult } from "../util/formatter.js";

export function printPurchaseAmount(purchaseAmount) {
  const ticketsCount = purchaseAmount / 1000;
  Console.print(`\n${ticketsCount}개를 구매했습니다.`);
}

export function printLottos(lottos) {
  lottos.forEach(lotto => {
    Console.print(lotto.getNumbers());
  });
}

export function printLottoResult(matchResult, rateOfResult) {
  Console.print('\n당첨 통계');
  Console.print('---');

  MATCH_COUNT_KEYS.forEach(matchKey => {
    const matchText = `${MATCH_COUNT[matchKey]}개 일치 `;
    const matchPrice = formatMatchPrice(MATCH_COUNT_PRICE[matchKey])
    const matchCount = matchResult[matchKey];
    Console.print(`${matchText}(${matchPrice}원) - ${matchCount}개`);
  })

  const result = formatRateOfResult(rateOfResult);
  Console.print(`총 수익률은 ${result}%입니다.`);
}

export function printError(errorMessage) {
  Console.print(errorMessage);
}