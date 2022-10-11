function isWord(str) {
  if (str.split(" ").length > 1) {
    return false;
  }
  return true;
}
export { isWord };
