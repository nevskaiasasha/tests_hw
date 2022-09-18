import { getMinutesToday } from "./min";

describe("minutes passed", () => {
  it("returns number of minutes", () => {
    const date = new Date();
    expect(getMinutesToday(date)).toEqual(751);
  });
});
