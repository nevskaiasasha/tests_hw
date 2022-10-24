import { mult } from "./mult";

const logSpy = jest.spyOn(console, "log").mockImplementation();
describe("mult", () => {
  mult();
  it("returns table of 7", () => {
    /* eslint-disable no-console */
    expect(logSpy).toHaveBeenCalledWith(`
    7*1=7
    7*2=14
    7*3=21
    7*4=28
    7*5=35
    7*6=42
    7*7=49
    7*8=56
    7*9=63`);
    /* eslint-enable no-console */
  });
});
