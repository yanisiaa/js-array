//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults(people)
 {
  let adults = []; // Ініціалізуємо масив для дорослих

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) adults.push(people[i]); // Додаємо дорослих без додаткового блоку
  }

  return adults; // Повертаємо масив дорослих
}

module.exports = filterAdults;
