import { parser } from "../src/util/parser.js";

describe("parser 함수 테스트", () => {
  test("쉼표로 구분된 문자열을 배열로 변환한다.", () => {
    const input = "1,2,3,4,5,6";
    expect(parser(input)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("입력 문자열에 공백이 포함되어 있어도 정상 변환한다.", () => {
    const input = " 1, 2 ,  3 , 4 ,  5 ,6 ";
    expect(parser(input)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("쉼표 이외에 다른 문자가 섞여있을 경우 NaN을 반환한다", () => {
    const input = "1,2,3,4,5,six";
    expect(parser(input)).toEqual([1, 2, 3, 4, 5, NaN]);
  });

  test("쉼표가 연속으로 있을 경우 빈 항목은 제거한다.", () => {
    const input = "1,2,,3,4,5,6";
    expect(parser(input)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("모든 항목이 비어있을 경우 빈 배열을 반환한다.", () => {
    const input = "";
    expect(parser(input)).toEqual([]);
  });
});