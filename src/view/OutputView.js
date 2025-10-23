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

export function printFinalRacingWinner(finalWinners) {
  const winners = finalWinners.join(', ');
  Console.print(`최종 우승자 : ${winners}`);
}