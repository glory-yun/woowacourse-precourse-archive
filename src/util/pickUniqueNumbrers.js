import { Random } from "@woowacourse/mission-utils";

export function pickUniqueNumbers() {
  const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return randomNumbers;
}