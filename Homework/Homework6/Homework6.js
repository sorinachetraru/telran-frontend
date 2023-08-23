//Запросить стоимость товара и вывести ее: со скидкой 10%

let product_price = +prompt("Please enter the price");
let user_discount = 0.1;
let result = product_price - product_price * user_discount;
alert(result + "Your price with the discount is");

// с наценкой 10%

product_price = +prompt("Please enter the price");
user_markup = 0.1;
result = product_price + product_price * user_markup;

//со скидкой 25%

product_price = +prompt("Please enter the price");
user_discount = 0.25;
result = product_price - product_price * user_discount;
alert("You have to pay the final price with a discount" + result);

//со наценкой 25%

product_price = +prompt("Please enter the price");
user_markup = 0.25;
result = product_price + product_price * user_markup;
alert(" You have to pay together with a surcharge: " + result);

//со скидкой 1%

product_price = +prompt("Please enter the price");
user_discount = 0.01;
result = product_price - product_price * user_discount;
alert("You have to pay the final price with a discount" + result);

//с наценкой 1.5%

product_price = +prompt("Please enter the price");
user_markup = 0.015;
result = product_price + product_price * user_markup;
alert(" You have to pay together with a surcharge: " + result);

// -------------- //

product_price = +prompt("Please enter the price");
if (product_price >= 100) {
  let discounted_price = product_price - product_price * 0.05;
  alert("You have to pay " + discounted_price);
} else {
  alert("You have to pay " + product_price);
}

// Запросить у юзера число и сравнить его с нулем
let number = +prompt("Please enter a number");
if (number < 0) {
  alert("Your number is less than 0");
} else if (number > 0) {
  alert("Your number is greater than 0");
} else {
  alert("Your numbers is equal to 0");
}

// Запросить у юзера число и вывести одну цифру, на которое оно заканчивается (мат.решение)
//-

/*
Функция, которая принимает два числа и возвращает их сумму.
sum

Функция, которая вычисляет среднее значение массива чисел.
get_average

Функция, которая проверяет, является ли число четным.
is_even

Функция, которая определяет, является ли число простым.
is_prime

Функция для форматирования даты в удобочитаемый вид.
format_date

Функция, которая принимает строку и возвращает её с заглавной первой буквой.
capitalise

Функция, которая обращает порядок элементов в массиве.
sort

Функция, которая генерирует случайное число в заданном диапазоне.
generate_randon_number

Функция, которая преобразует строку в верхний регистр.
to_upper_case

Функция, которая преобразует строку в нижний регистр.
to_lower_case

Функция, которая проверяет, является ли строка допустимым адресом электронной почты.
verify_email

Функция, которая находит наибольшее значение из массива чисел.
find_max

Функция, которая находит наименьшее значение из массива чисел.
find_min

Функция, которая вычисляет площадь геометрической фигуры.
calculate_area

Функция для перевода температуры из Цельсия в Фаренгейт.
Celsius_to_Farenheit

Функция для перевода температуры из Фаренгейта в Цельсий.
Farenheit_to_Celsius

Функция, которая вычисляет факториал числа.
get_factorial

Функция, которая вычисляет расстояние между двумя точками в пространстве.
get_distance

Функция, которая форматирует число как денежную сумму в нужной валюте.
format_currency

Функция, которая возвращает длину строки.
get length

*/
