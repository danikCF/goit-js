console.log('task-5');
import users from "./users.js";
const getUserWithEmail = (users, email) => {
  return users.find(el => el.email===email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}