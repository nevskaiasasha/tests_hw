import { reg } from "./mail";

describe("RegExp: mail", () => {
  it("expected to match mail regex", () => {
    const str = "johndoe@ya.ru";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: mail", () => {
  it("expected to match mail regex", () => {
    const str = "tuoe@gmail.com";
    expect(str).toMatch(reg);
  });
});

describe("RegExp: mail", () => {
  it("expected to match mail regex", () => {
    const str = "aidnf@ya.ru";
    expect(str).toMatch(reg);
  });
});
