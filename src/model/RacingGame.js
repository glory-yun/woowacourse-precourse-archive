import { findRacingWinners } from '../util/findRacingWinners.js';
import { pickRandomNumber } from '../util/pickRandomNumber.js';

class RacingGame {
  #Cars;

  constructor(Cars) {
    this.#Cars = Cars;
  }

  #race() {
    this.#Cars.forEach((car) => {
      const randomNumber = pickRandomNumber();
      if (randomNumber >= 4) {
        car.move();
      }
    });
  }

  #getRacingResult() {
    const raceResult = this.#Cars.map(car => (
      { carName: car.getName(), position: car.getPosition() }
    ));
    return raceResult;
  }

  play(racingCount) {
    const allResult = [];
    for (let count = 0; count < racingCount; count++) {
      this.#race();
      const currentRaceResult = this.#getRacingResult();
      allResult.push(currentRaceResult);
    }
    return allResult;
  }

  getWinners() {
    const finalResult = this.#getRacingResult();
    return findRacingWinners(finalResult);
  }
}

export default RacingGame