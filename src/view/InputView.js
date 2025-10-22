import { Console } from '@woowacourse/mission-utils';
import { validateEmptyInput } from '../util/validate.js';

export async function enterInput() {
  const carInput = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);
  const racingCount = await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);

  validateEmptyInput(carInput, racingCount);
  validateRacingCountIsNaN(racingCount);
  validateNegativeNumber(racingCount);

  return [carInput, Number(racingCount)];
}