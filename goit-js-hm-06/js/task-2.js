console.log('task-2');
import users from "./users.js";
const getUsersWithEyeColor = (users, color) => {
    return users.map((el) => el.eyeColor);

  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
