import { Console } from "@woowacourse/mission-utils";
import {
  BLINK_SPACE,
  RESULT_BAR,
  FINAL_WINNERS
} from "../constants/OutputViewConstants.js";

export function printLineSpacing(message = BLINK_SPACE) {
  Console.print(message);
}

export function printCurrentRaceResult(currentRaceResult) {
  currentRaceResult.forEach(result => {
    const repeatPositionBar = RESULT_BAR.repeat(result.position);
    Console.print(`${result.carName} : ${repeatPositionBar}`);
  });
  printLineSpacing();
}

export function printFinalRacingWinner(finalWinners) {
  const winners = finalWinners.join(', ');
  Console.print(`${FINAL_WINNERS}${winners}`);
}

export function printError(errorMessage) {
  Console.print(errorMessage);
}