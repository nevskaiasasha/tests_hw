const user = {
  name: "John",
};

user.age = prompt("Введите возраст");
const clone = {};
Object.keys(user).forEach((key) => {
  clone[key] = user[key];
});
clone.name = "admin";
clone.role = "admin";
export { user };
export { clone };
