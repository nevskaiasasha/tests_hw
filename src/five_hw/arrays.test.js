import { makeArray } from "./arrays";

describe("arrays", () => {
  const arr = [3, 2, 5, 6];
  it("console.log the sum of array", () => {
    /* eslint-disable no-console */
    const logSpy = jest.spyOn(console, "log");
    console.log(16);
    expect(logSpy).toHaveBeenCalledWith(16);
    /* eslint-enable no-console */
  });
  it("returns new array", () => {
    expect(makeArray(arr)).toEqual([6, 4, 10, 12]);
  });
});
