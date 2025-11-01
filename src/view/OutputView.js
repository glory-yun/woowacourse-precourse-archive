import { Console } from "@woowacourse/mission-utils";
import { getLottoNumbersMessage, getLottoResultMessages } from "../util/messageFormatter.js";

export function printPurchaseAmount(purchaseAmount) {
  const ticketsCount = purchaseAmount / 1000;
  Console.print(`\n${ticketsCount}개를 구매했습니다.`);
}

export function printLottos(lottos) {
  lottos.forEach(lotto => {
    const message = getLottoNumbersMessage(lotto.getNumbers());
    Console.print(message);
  });
}

export function printLottoResult(matchResult, rateOfResult) {
  const messages = getLottoResultMessages(matchResult, rateOfResult);
  messages.forEach(msg => Console.print(msg));
}

export function printError(errorMessage) {
  Console.print(errorMessage);
}