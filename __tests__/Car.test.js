// Car객체 테스트
import Car from '../src/model/Car.js';

describe('Car', () => {

  const car = new Car('glory');

  test('getPosition() : 자동차의 현재 위치를 반환', () => {
    expect(car.getPosition()).toBe(0);
  });

  test('move() : position이 1 증가', () => {
    car.move();
    car.move();
    expect(car.getPosition()).toBe(2);
  });

  test('getName() : 자동차의 이름을 반환', () => {
    expect(car.getName()).toBe('glory');
  });

});