function getDayOfWeek(date) {
  const temp = date.split("/");
  const myYear = temp[2];
  const myMonth = parseInt(temp[1], 10) - 1;
  const myDate = parseInt(temp[0], 10);
  const form = new Date(myYear, myMonth, myDate);

  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[form.getDay()];
}
export { getDayOfWeek };
