import { reg } from "./num";

describe("RegExp: phone", () => {
  it("expected to match phone regex", () => {
    const str = "+7 456 421-64-97";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: phone", () => {
  it("expected to match phone regex", () => {
    const str = "+7 979 939-89-90";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: phone", () => {
  it("expected to match phone regex", () => {
    const str = "+79699473581";
    expect(str).toMatch(reg);
  });
});
