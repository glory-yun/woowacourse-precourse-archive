//Racing 객체 테스트
import Car from '../src/model/Car.js';
import RacingGame from '../src/model/RacingGame.js';
import { MissionUtils } from '@woowacourse/mission-utils';

//가짜 난수 사용
const mockRace = (randomNumbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  randomNumbers.reduce((acc, randomNumber) => {
    return acc.mockReturnValueOnce(randomNumber);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('RacingGame', () => {

  const cars = [new Car('a'), new Car('b'), new Car('c')];
  const racingGame = new RacingGame(cars);

  //난수 생성 테스트
  test('난수 생성 테스트(0~9 사이의 정수를 생성하는지)', () => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    expect(0 <= randomNumber && randomNumber <= 9).toBe(true);
  })

  //race 결과를 반환하는 테스트
  test('getRacingResult() : Racing 결과 테스트 반환', () => {
    expect(racingGame.getRacingResult()).toEqual([
      { "carName": "a", "position": 0 },
      { "carName": "b", "position": 0 },
      { "carName": "c", "position": 0 }
    ])
  })

  //race 테스트
  test('race() : 난수에 따라 car를 움직임', () => {
    // 가짜로 난수 집어넣기. 총 3번 생성.
    const MOVING_FORWARD = 9;
    const STOP = 0;
    mockRace([MOVING_FORWARD, STOP, MOVING_FORWARD]);

    racingGame.race();

    expect(racingGame.getRacingResult()).toEqual([
      { "carName": "a", "position": 1 },
      { "carName": "b", "position": 0 },
      { "carName": "c", "position": 1 }
    ])
  })
});