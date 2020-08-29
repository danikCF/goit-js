console.log('task-3');
import users from "./users.js";
const getUsersWithGender = (users, gender) => {
    return users.filter((el) => el.gender === gender).map((el) => el.name);
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]