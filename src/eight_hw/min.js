function getMinutesToday() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}
export { getMinutesToday };
