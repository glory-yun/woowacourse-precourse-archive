// Car객체 테스트
import Car from '../src/model/Car.js';

describe('Car', () => {

  test('getPosition() : 자동차의 현재 위치를 반환', () => {

    const car = new Car('glory');

    expect(car.getPosition()).toBe(0);
  });

  test.each([
    [0, 0],
    [1, 1],
    [2, 2]
  ])('move() : %s번 이동시 position이 %s 증가', (moveCount, position) => {

    const car = new Car('glory');

    for (let count = 0; count < moveCount; count++) {
      car.move();
    }
    expect(car.getPosition()).toBe(position);
  })

  test('getName() : 자동차의 이름을 반환', () => {

    const car = new Car('glory');

    expect(car.getName()).toBe('glory');
  });

});