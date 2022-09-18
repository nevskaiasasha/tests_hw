import { getMinutesToday } from "./min";

describe("minutes passed", () => {
  it("returns number of minutes", () => {
    expect(getMinutesToday()).toEqual(755);
  });
});
