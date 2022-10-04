import { mult, su } from "./mult";

describe("mult", () => {
  it("multiplies numbers", () => {
    mult(2, 3);
    /* eslint-disable no-console */
    const logSpy = jest.spyOn(console, "log");
    console.log(6);
    expect(logSpy).toHaveBeenCalledWith(6);
  });
});
describe("sum", () => {
  su(1, 3);
  it("sum numbers", () => {
    const logSpy = jest.spyOn(console, "log");
    console.log(4);
    expect(logSpy).toHaveBeenCalledWith(4);
    /* eslint-enable no-console */
  });
});
