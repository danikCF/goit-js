console.log('task-4');
import users from "./users.js";
const getInactiveUsers = users => {
    return users.filter((el => !el.isActive))
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]