function makeArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  /* eslint-disable no-console */
  console.log(sum);
  /* eslint-enable no-console */
  const multArr = [...arr];
  for (let i = 0; i < arr.length; i += 1) {
    multArr[i] *= 2;
  }
  return multArr;
}
export { makeArray };
