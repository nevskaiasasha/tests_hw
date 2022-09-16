class Circle {
  constructor(params) {
    this.radius = params.radius;
  }

  area() {
    return 3 * this.radius * this.radius;
  }

  perimeter() {
    return 2 * 3 * this.radius;
  }
}
export { Circle };
