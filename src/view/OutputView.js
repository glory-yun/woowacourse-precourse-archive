import { Console } from "@woowacourse/mission-utils";

export function printLineSpacing(message = '') {
  Console.print(message);
}

export function printCurrentRaceResult(currentRaceResult) {
  currentRaceResult.forEach(result => {
    const repeatPositionBar = '-'.repeat(result.position);
    Console.print(`${result.carName} : ${repeatPositionBar}`);
  });
  printLineSpacing();
}