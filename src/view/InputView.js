import { Console } from '@woowacourse/mission-utils';
import { validateEmptyInput, validateRacingCountIsNaN, validateNegativeNumber } from '../util/validate.js';
import { READ_INPUT, READ_COUNT } from '../constants/InputViewConstants.js';

export async function enterInput() {
  const carInput = await Console.readLineAsync(`${READ_INPUT}\n`);
  const racingCount = await Console.readLineAsync(`${READ_COUNT}\n`);

  validateEmptyInput(carInput, racingCount);
  validateRacingCountIsNaN(racingCount);
  validateNegativeNumber(Number(racingCount));

  return [carInput, Number(racingCount)];
}