import { getMonth } from "./month";

jest
  .spyOn(window, "prompt")
  .mockReturnValueOnce("January")
  .mockReturnValue("You entered too big number");

describe("month returning", () => {
  it("should return month from number", () => {
    expect(getMonth(1)).toBe("January");
  });
  it("should return warning message", () => {
    expect(getMonth(15)).toBe("You entered too big number");
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
});
