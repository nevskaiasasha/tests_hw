import { user, clone } from "./john";

describe("objects", () => {
  it("callFn alerts value entered to prompt", () => {
    jest.spyOn(window, "prompt").mockReturnValue(12);
    expect(user.age).toEqual(12);
  });
  it("clones object", () => {
    expect(clone).toHaveProperty("name");
  });
  it("checks role field", () => {
    expect(clone.role).toEqual("admin");
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
});
