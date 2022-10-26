import { isWord } from "./word";

describe("isWord", () => {
  it("checks if it is a word", () => {
    expect(isWord("Hello world")).toBeFalsy();
  });
  it("checks if it is a word", () => {
    expect(isWord("Hello")).toBeTruthy();
  });
});
