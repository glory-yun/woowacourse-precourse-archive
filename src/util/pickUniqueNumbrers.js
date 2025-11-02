import { Random } from "@woowacourse/mission-utils";
import {
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_NUMBER_COUNT
} from "./constants/valuesConstants.js";

export function pickUniqueNumbers() {
  const randomNumbers = Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_NUMBER_COUNT);
  return randomNumbers;
}