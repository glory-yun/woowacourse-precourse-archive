import { Console } from "@woowacourse/mission-utils";
import { getLottoNumbersMessage, getLottoResultMessages } from "../util/messageFormatter.js";
import { LOTTO_PRICE } from "../util/constants/valuesConstants.js";
import { OUTPUT_MESSAGES } from "../util/constants/messagesConstants.js";

export function printPurchaseAmount(purchaseAmount) {
  const ticketsCount = purchaseAmount / LOTTO_PRICE;
  Console.print(OUTPUT_MESSAGES.PURCHASE_COUNT(ticketsCount));
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