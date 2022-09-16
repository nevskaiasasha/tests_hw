import { reg } from "./mail";

describe("RegExp: mail", () => {
  it("expected to match mail regex", () => {
    const str = "johndoe@ya.ru";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: mail", () => {
  it("expected to match mail regex", () => {
    const str = "23.06";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: mail", () => {
  it("expected to match mail regex", () => {
    const str = "@ya.ru";
    expect(str).toMatch(reg);
  });
});
