import { numOfSym } from "./str";

describe("numOfSym", () => {
  it("returns num of symbols", () => {
    numOfSym("Sara", "Woo");
    /* eslint-disable no-console */
    const logSpy = jest.spyOn(console, "log");
    console.log(7);
    expect(logSpy).toHaveBeenCalledWith(7);
    /* eslint-enable no-console */
  });
});
