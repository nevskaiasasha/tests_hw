function mult() {
  let str = ``;
  for (let i = 1; i <= 9; i += 1) {
    /* eslint-disable no-console */
    const num = i * 7;
    str = `${str}
    ${7}*${i}=${num}`;
  }
  console.log(str);
  /* eslint-enable no-console */
}
export { mult };
