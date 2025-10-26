import { MissionUtils } from '@woowacourse/mission-utils';
import { findRacingWinners } from '../util/findRacingWinners.js';

class RacingGame {
  #Cars;

  constructor(Cars) {
    this.#Cars = Cars;
  }

  #race() {
    this.#Cars.forEach((car) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
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