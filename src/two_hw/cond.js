function comp(a, b) {
  if (a === undefined) {
    return b;
  }
  if (b === undefined) {
    return a;
  }
  return Math.max(a, b);
}
export { comp };
