import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../util/constants/messagesConstants.js";

export async function readPurchaseAmount() {
  return Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
}

export async function readWinningNumbers() {
  return Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
}

export async function readBonusNumbers() {
  return Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
}
