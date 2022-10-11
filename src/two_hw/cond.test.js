import { comp } from "./cond";

describe("comparison", () => {
  it("returns bigger number", () => {
    expect(comp(1, 2)).toEqual(2);
  });
  it("works if numbers are the same", () => {
    expect(comp(3, 3)).toEqual(3);
  });
  it("works if there is one number", () => {
    expect(comp(5)).toEqual(5);
  });
});
