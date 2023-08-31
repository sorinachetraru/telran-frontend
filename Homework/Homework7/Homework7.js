// 1. Написать функцию, которая получает один аргумент (массив целых чисел: положительных и отрицательных) и возвращает сумму положительных чисел.

function sum_of_positives(numbers) {
  let result = 0;

  for (let n = 0; n < numbers.length; n++) {
    let current_number = numbers[n];

    if (current_number > 0) {
      result += current_number;
    }
  }

  return result;
}
console.log(sum_of_positives([75, 98, -23, -45, 0]));

//Написать функцию, которая получает один аргумент (массив целых чисел) и наибольшее число из массива.

function func_name (numbers) {
  let numbers (2,4,-56,324);

 

 
}

// Написать функцию, которая получает на входе массив элементов и определяет, четное или нечетное ко-во элементов в полученном массиве

function quantity_of_positive_numbers(numbers) {
  let result = 0;

  for (let n = 0; n < numbers.length; n++) {
    let current_number = numbers[n];
    if (current_number > 0) {
      result = result + 1;
    }
  }
  return result;
}
console.log(quantity_of_positive_numbers([45, 9850947, 12, 0, -4575, -87]));
