import { summ } from "./cycles";

describe("summ", () => {
  it("sums numbers", () => {
    /* eslint-disable no-console */
    const logSpy = jest.spyOn(console, "log");
    summ();
    expect(logSpy).toHaveBeenCalledWith(3825);
    /* eslint-enable no-console */
  });
  it("expects calling", () => {
    const logSpy = jest.spyOn(console, "log");
    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});
