import Lotto from "../src/domain/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test.each([
    { description: '문자열이 포함된 경우', numbers: [1, 2, 3, 4, 5, 'six'] },
    { description: '소수가 포함된 경우', numbers: [1, 2, 3, 4, 5, 6.5] },
    { description: 'NaN이 포함된 경우', numbers: [1, 2, 3, 4, 5, NaN] },
  ])('로또 번호에 $description 예외가 발생한다.', ({ numbers }) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow("[ERROR]")
  })

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test.each([
    { description: '0 이하인 숫자가 있으면', number: 0 },
    { description: '46 이상인 숫자가 있으면', number: 46 },
  ])('로또 번호가 $description 예외가 발생한다.', ({ number }) => {
    expect(() => {
      new Lotto(number);
    }).toThrow("[ERROR]")
  })

  test('성공정으로 로또가 생성되었다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 45]);
    }).not.toThrow("[ERROR]")
  });
});
