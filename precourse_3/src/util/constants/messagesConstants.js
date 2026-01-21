export const INPUT_MESSAGES = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGES = {
  PURCHASE_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  HEADER_RESULT: '\n당첨 통계',
  HEADER_DIVIDER: '---',
  TOTAL_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};
