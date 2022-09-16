import { reg } from "./num";

describe("RegExp: phone", () => {
  it("expected to match phone regex", () => {
    const str = "+7 456 421-64-97";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: phone", () => {
  it("expected to match phone regex", () => {
    const str = "+7 999 9fghtht99-99-99";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: phone", () => {
  it("expected to match phone regex", () => {
    const str = "+7 9699 ";
    expect(str).toMatch(reg);
  });
});
