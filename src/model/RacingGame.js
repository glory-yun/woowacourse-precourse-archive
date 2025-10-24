import { MissionUtils } from '@woowacourse/mission-utils';

class RacingGame {
  #Cars;
  #raceResult;

  constructor(Cars) {
    this.#Cars = Cars;
  }

  race() {
    this.#Cars.forEach((car) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.move();
      }
    });
  }

  getRacingResult() {
    this.#raceResult = this.#Cars.map(car => (
      { carName: car.getName(), position: car.getPosition() }
    ));
    return this.#raceResult;
  }

}

export default RacingGame