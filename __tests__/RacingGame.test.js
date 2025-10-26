//Racing 객체 테스트
import Car from '../src/model/Car.js';
import RacingGame from '../src/model/RacingGame.js';
import { pickRandomNumber } from '../src/util/pickRandomNumber.js';

//가짜 난수 사용
jest.mock('../src/util/pickRandomNumber.js');
const mockRace = (randomNumbers) => {
  randomNumbers.reduce((acc, randomNumber) => {
    return acc.mockReturnValueOnce(randomNumber);
  }, pickRandomNumber);
};

describe('RacingGame', () => {

  const cars = [new Car('a'), new Car('b'), new Car('c')];
  const racingGame = new RacingGame(cars);

  test('getWinners() : 최종 우승자를 반환', () => {
    const finalWinners = racingGame.getWinners();
    //0번 경주 : 모두 우승자
    expect(finalWinners).toEqual(['a', 'b', 'c'])
  })

  test('play() : racingCount만큼 race하고, 모든 결과를 배열로 반환', () => {
    // 가짜로 난수 집어넣기. 총 3번 생성.
    const MOVING_FORWARD = 9;
    const STOP = 0;
    mockRace([
      MOVING_FORWARD, STOP, MOVING_FORWARD,
      STOP, MOVING_FORWARD, MOVING_FORWARD,
    ]);

    const expectResult = [
      [ // 1라운드
        { "carName": "a", "position": 1 },
        { "carName": "b", "position": 0 },
        { "carName": "c", "position": 1 }
      ],
      [ // 2라운드
        { "carName": "a", "position": 1 },
        { "carName": "b", "position": 1 },
        { "carName": "c", "position": 2 }
      ]
    ]

    racingCount = 2;
    const allRacingResult = racingGame.play(racingCount);

    expect(allRacingResult).toEqual(expectResult)
  })

});