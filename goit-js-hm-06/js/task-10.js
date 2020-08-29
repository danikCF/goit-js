console.log('task-10');
import users from "./users.js";
const getSortedUniqueSkills = users =>
    users.reduce((allSkills, el)=>{
        allSkills.push(...el.skills);
        return allSkills;
    }, [])
    .reduce((uniqSkills, el)=>{
        if(!uniqSkills.includes(el)){
            uniqSkills.push(el);
        }
        return uniqSkills;
    },[])
    .sort();
  console.log(getSortedUniqueSkills(users));