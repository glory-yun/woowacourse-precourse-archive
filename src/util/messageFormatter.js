import { MATCH_COUNT_KEYS, MATCH_MESSAGE } from "./lottoConstants.js";
import { formatRateOfResult } from "./formatter.js";

export function getLottoNumbersMessage(numbers) {
  return `[${numbers.join(', ')}]`;
}

export function getLottoResultMessages(matchResult, rateOfResult) {
  const messages = [];
  messages.push('\n당첨 통계');
  messages.push('---');
  MATCH_COUNT_KEYS.forEach(matchKey => {
    const matchMessage = MATCH_MESSAGE[matchKey];
    const matchCount = matchResult[matchKey];
    messages.push(`${matchMessage}${matchCount}개`);
  });
  messages.push(`총 수익률은 ${formatRateOfResult(rateOfResult)}%입니다.`);
  return messages;
}
