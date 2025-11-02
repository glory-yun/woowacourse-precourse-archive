export const MATCH_COUNT = Object.freeze({
  MATCH_THREE: 3,
  MATCH_FOUR: 4,
  MATCH_ONLY_FIVE: 5,
  MATCH_FIVE_AND_BONUS: 5,
  MATCH_SIX: 6
});

export const MATCH_COUNT_PRICE = Object.freeze({
  MATCH_THREE: 5000,
  MATCH_FOUR: 50000,
  MATCH_ONLY_FIVE: 1500000,
  MATCH_FIVE_AND_BONUS: 30000000,
  MATCH_SIX: 2000000000
});

export const MATCH_MESSAGE = Object.freeze({
  MATCH_THREE: "3개 일치 (5,000원) - ",
  MATCH_FOUR: "4개 일치 (50,000원) - ",
  MATCH_ONLY_FIVE: "5개 일치 (1,500,000원) - ",
  MATCH_FIVE_AND_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  MATCH_SIX: "6개 일치 (2,000,000,000원) - ",
});

export const MATCH_COUNT_KEYS = Object.keys(MATCH_COUNT_PRICE);
