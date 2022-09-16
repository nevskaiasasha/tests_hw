import { reg } from "./data";

describe("RegExp: data", () => {
  it("expected to match data regex", () => {
    const str = "23.05.2018";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: data", () => {
  it("expected to match data regex", () => {
    const str = "gtr46";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: data", () => {
  it("expected to match data regex", () => {
    const str = "23.06";
    expect(str).toMatch(reg);
  });
});
