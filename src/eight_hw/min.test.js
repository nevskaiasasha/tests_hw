import { getMinutesToday } from "./min";

describe("minutes passed", () => {
  it("returns number of minutes", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2022-01-01"));
    const date = new Date();
    expect(getMinutesToday(date)).toEqual(0);
  });
});
