class Circle {
  constructor(params) {
    this.radius = params.radius;
  }

  area() {
    const area = 3 * this.radius * this.radius;
    return area;
  }

  perimeter() {
    return 2 * 3 * this.radius;
  }
}
export { Circle };
