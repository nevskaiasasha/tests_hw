import { getDayOfWeek } from "./day";

describe("day of week", () => {
  it("returns the day of week", () => {
    const date = "13/11/1996";
    expect(getDayOfWeek(date)).toEqual("СР");
  });
});
