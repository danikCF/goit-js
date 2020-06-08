console.log("homework 1");
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const entries = Object.entries(user);
for (let entry of entries) {
  const key = entry[0];
  const val = entry[1];
  console.log(`${key}:${val}`);
}
