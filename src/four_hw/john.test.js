import { User } from "./john";

jest.spyOn(window, "prompt").mockReturnValue(12);

describe("objects", () => {
  const adm = new User("admin");
  it("should have a name", () => {
    expect(adm.name).toContain("admin");
  });
  it("callFn alerts value entered to prompt", () => {
    expect(adm.age).toBe(12);
  });
  it("should be able to add new property", () => {
    adm.role = "admin";
    expect(adm).toHaveProperty("role");
  });
  it("should destructure an object", () => {
    const { name, age, role } = adm;
    expect(name).toBe("admin");
    expect(age).toBe(12);
    expect(role).toBe("admin");
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
});
