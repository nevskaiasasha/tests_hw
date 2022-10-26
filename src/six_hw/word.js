function isWord(str) {
  if (str.trim().split(" ").length > 1) {
    return false;
  }
  return true;
}
export { isWord };
