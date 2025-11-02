import { MATCH_COUNT_KEYS, MATCH_MESSAGE } from "./constants/lottoConstants.js";
import { formatRateOfResult } from "./rateFormatter.js";
import { OUTPUT_MESSAGES } from "./constants/messagesConstants.js";

export function getLottoNumbersMessage(numbers) {
  return `[${numbers.join(', ')}]`;
}

export function getLottoResultMessages(matchResult, rateOfResult) {
  const messages = [];
  messages.push(OUTPUT_MESSAGES.HEADER_RESULT);
  messages.push(OUTPUT_MESSAGES.HEADER_DIVIDER);
  MATCH_COUNT_KEYS.forEach(matchKey => {
    const matchMessage = MATCH_MESSAGE[matchKey];
    const matchCount = matchResult[matchKey];
    messages.push(`${matchMessage}${matchCount}개`);
  });
  messages.push(OUTPUT_MESSAGES.TOTAL_RATE(formatRateOfResult(rateOfResult)));
  return messages;
}
