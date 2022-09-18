import { getMinutesToday } from "./min";

describe("minutes passed", () => {
  it("returns number of minutes", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2017-11-25T12:00:56z"));
    const date = new Date();
    expect(getMinutesToday(date)).toEqual(900);
  });
});
