console.log('task-7');
import users from "./users.js";
const calculateTotalBalance = users => {
    return users.reduce((total,el)=>total+el.balance,0);
  };
  
  console.log(calculateTotalBalance(users)); // 20916