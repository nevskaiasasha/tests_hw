import { isRightTriangle } from "./triangle";

describe("isRightTriangle", () => {
  it("checks if the triangle is right", () => {
    expect(isRightTriangle(3, 4, 5)).toEqual(true);
  });
});

describe("isRightTriangle", () => {
  it("checks if the triangle is right", () => {
    expect(isRightTriangle(1, 9, 3)).toEqual(false);
  });
});

describe("isRightTriangle", () => {
  it("checks if the triangle is right", () => {
    expect(isRightTriangle(1, 4, 7)).toEqual(false);
  });
});
