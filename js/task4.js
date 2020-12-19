const countTotalSalary = function (employees) {
  // твой код
  let totalSalarySum = 0;
  const keys = Object.values(employees);
  for (const key of keys) {
    totalSalarySum += key;
  }
  return totalSalarySum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
