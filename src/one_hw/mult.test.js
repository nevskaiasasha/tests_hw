import { mult } from "./mult";

const logSpy = jest.spyOn(console, "log").mockImplementation();
describe("mult", () => {
  it("multiplies numbers", () => {
    mult(2, 3);
    /* eslint-disable no-console */
    expect(logSpy).toHaveBeenCalledWith(5, 6);
    /* eslint-enable no-console */
  });
});
