import { reg } from "./data";

describe("RegExp: data", () => {
  it("expected to match data regex", () => {
    const str = "23.05.2018";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: data", () => {
  it("expected to match data regex", () => {
    const str = "1.05.2039";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: data", () => {
  it("expected to match data regex", () => {
    const str = "23.04.1952";
    expect(str).toMatch(reg);
  });
});
