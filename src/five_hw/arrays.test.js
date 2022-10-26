import { makeArray } from "./arrays";

describe("arrays", () => {
  const arr = [3, 2, 5, 6];
  it("returns new array", () => {
    expect(makeArray(arr)).toEqual([6, 4, 10, 12]);
  });
});
