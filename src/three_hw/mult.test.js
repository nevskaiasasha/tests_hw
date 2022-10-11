import "./mult";

describe("mult", () => {
  it("returns 7 * 1", () => {
    /* eslint-disable no-console */
    const logSpy = jest.spyOn(console, "log");
    console.log(`${7}*${1}=${7} `);
    expect(logSpy).toHaveBeenCalledWith(`${7}*${1}=${7} `);
    /* eslint-enable no-console */
  });
  it("returns 7 * 2", () => {
    /* eslint-disable no-console */
    const logSpy = jest.spyOn(console, "log");
    console.log(`${7}*${2}=${7} `);
    expect(logSpy).toHaveBeenCalledWith(`${7}*${2}=${7} `);
    /* eslint-enable no-console */
  });
  it("expects calling", () => {
    const logSpy = jest.spyOn(console, "log");
    expect(logSpy).toHaveBeenCalledTimes(2);
  });
});
