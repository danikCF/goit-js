console.log('task-9');
import users from "./users.js";
const getNamesSortedByFriendsCount = users => {
    return users.sort((min, max) => min.friends.length - max.friends.length)
    .map((el)=> el.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]