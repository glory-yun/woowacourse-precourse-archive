import { MATCH_COUNT_KEYS, MATCH_COUNT } from "../util/constants/lottoConstants.js";

export function calculateLottoResult(lottos, lottoWinningNumbers) {
  const { winningNumbers, bonusNumber } = lottoWinningNumbers.getLottoWinningNumbers();
  const matchResult = {};
  MATCH_COUNT_KEYS.forEach(key => matchResult[key] = 0);

  lottos.forEach(lotto => {
    const lottoNumbers = lotto.getNumbers();
    const matchCount = getMatchCount(lottoNumbers, winningNumbers);
    const isBonusMatch = isMatchBonusNumber(lottoNumbers, bonusNumber);

    const matchCountKey = getMatchKey(matchCount, isBonusMatch);
    if (matchCountKey) matchResult[matchCountKey]++;
  });
  return matchResult;
}

function getMatchCount(lottoNumbers, winningNumbers) {
  const matchNumbers = lottoNumbers.filter(number => winningNumbers.includes(number));
  return matchNumbers.length;
}

function isMatchBonusNumber(lottoNumbers, bonusNumber) {
  return lottoNumbers.includes(bonusNumber);
}

function getMatchKey(matchCount, isBonusMatch) {
  if (matchCount === MATCH_COUNT.MATCH_SIX) return 'MATCH_SIX';
  if (matchCount === MATCH_COUNT.MATCH_FIVE_AND_BONUS && isBonusMatch) return 'MATCH_FIVE_AND_BONUS';
  if (matchCount === MATCH_COUNT.MATCH_ONLY_FIVE) return 'MATCH_ONLY_FIVE';
  if (matchCount === MATCH_COUNT.MATCH_FOUR) return 'MATCH_FOUR';
  if (matchCount === MATCH_COUNT.MATCH_THREE) return 'MATCH_THREE';

  return null;
}

