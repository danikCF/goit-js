console.log("homework 3");
const findBestEmployee = function (employees) {
  const deals = Object.keys(employees);
  let bestEmployee = 0;
  let rez;
  for (let deal of deals) {
    if (employees[deal] > bestEmployee) {
      bestEmployee = employees[deal];
      rez = deal;
    }
  }
  return rez;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
