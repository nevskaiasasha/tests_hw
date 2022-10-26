import { diff } from "./subt";

describe("diff", () => {
  it("returns difference", () => {
    expect(diff(5, 1)).toEqual(4);
  });
});
