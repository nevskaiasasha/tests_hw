function mult() {
  for (let i = 1; i <= 9; i += 1) {
    /* eslint-disable no-console */
    let num = 0;
    num = i * 7;
    console.log(`${7}*${i}=${num} `);
    /* eslint-enable no-console */
  }
}
export { mult };
