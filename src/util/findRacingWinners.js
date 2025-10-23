export function findRacingWinners(finalResult) {
  const carsPositionResult = finalResult.map(result => result.position);
  const bestPosition = Math.max(...carsPositionResult);
  const winners = finalResult.filter(result => result.position === bestPosition);
  const winnersName = winners.map(winner => winner.carName);

  return winnersName
}