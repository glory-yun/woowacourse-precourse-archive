import { findRacingWinners } from '../util/findRacingWinners.js';
import { pickRandomNumber } from '../util/pickRandomNumber.js';
import { FORWARD_CONDITION } from '../constants/RacingGameConstants.js';

class RacingGame {
  #Cars;

  constructor(Cars) {
    this.#Cars = Cars;
  }

  #race() {
    this.#Cars.forEach((car) => {
      const randomNumber = pickRandomNumber();
      if (randomNumber >= FORWARD_CONDITION) {
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