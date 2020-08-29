console.log('task-8');
import users from "./users.js";
const getUsersWithFriend = (users, friendName) => {
    return users
    .filter((el) => el.friends.includes(friendName))
    .map((el) => el.name);    
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]