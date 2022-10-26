function summ() {
  let res = 0;

  for (let i = 50; i <= 100; i += 1) {
    res += i;
  }
  /* eslint-disable no-console */
  console.log(res);
  /* eslint-enable no-console */
}
export { summ };
