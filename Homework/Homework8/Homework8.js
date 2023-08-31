// Написать функцию, которая принимает товары (массив объектов) и возвращает строку Самый дорогой товар <НАЗВАНИЕ> стоит  USD 

// Написать первую функцию мне помог муж.

let products = [
  { title: "Product 1", category: "tv", supplier: "usa", price_usd: 1000 },
  { title: "Product 2", category: "tv", supplier: "germany", price_usd: 880 },
  { title: "Product 3", category: "tv", supplier: "china", price_usd: 500 },
];

function most_expensive_product(products) {
  let max_price = 0;
  let product_name = "unknown";
  for (let n = 0; n < products.length; n++) {
    let current_product = products[n];

    if (current_product.price_usd > max_price) {
      max_price = current_product.price_usd;
      product_name = current_product.title;
    }
  }

  console.log(
    `The most expensive product is ${product_name} and costs ${max_price} USD`
  );
}

most_expensive_product(products);

//Напишите функцию, которая выводит все числа от 1 до 100, кратные трем.

function multiples_of_three() {
  for (n = 1; n <= 100; n++) {
    if (n % 3 == 0) {
      console.log(n);
    }
  }
}
multiples_of_three();

//Напишите функцию, которая находит сумму всех чисел от 1 до 100 и выводит ее в консоль
function sum_of_numbers() {
  let sum = 0;
  for (n = 1; n <= 100; n++) {
    sum = sum + n;
  }

  console.log(sum);
}

sum_of_numbers();
