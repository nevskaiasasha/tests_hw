import { Circle } from "./circle";

describe("Circle", () => {
  it("should have a radius", () => {
    const circle = new Circle({ radius: 5 });
    expect(circle.radius).toBe(5);
  });

  describe("area", () => {
    it("returns the area of the circle", () => {
      const circle = new Circle({ radius: 2 });
      expect(circle.area()).toBe(12);
    });
  });

  describe("perimeter", () => {
    it("returns the perimeter of the circle", () => {
      const circle = new Circle({ radius: 8 });
      expect(circle.perimeter()).toBe(48);
    });
  });
});
