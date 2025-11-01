import { formatMatchPrice, formatRateOfResult } from "../src/util/formatter.js";

describe("formatMatchPrice 함수 테스트", () => {
  test("천 단위 콤마로 구분하여 문자열로 반환한다.", () => {
    expect(formatMatchPrice(3000)).toBe("3,000");
  })
});

describe("formatRateOfResult 함수 테스트", () => {
  test("천 단위 콤마로 구분하여 문자열로 반환한다.", () => {
    expect(formatRateOfResult(3000)).toBe("3,000.0");
  })

  test("소수점이 없을 때 .0을 붙여 한 자리 소수점으로 반환한다.", () => {
    expect(formatRateOfResult(100)).toBe("100.0");
  });
});
