function getMonth(monthNumber) {
  const date = prompt("Insert month number");
  new Date(date).setMonth(monthNumber - 1);

  if (date > 12 || date < 1) {
    return "You entered too big number";
  }
  return date.toLocaleString("en-US", {
    month: "long",
  });
}
export { getMonth };
