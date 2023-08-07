//------1 задание------
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, 
// решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9]

console.log(`Минимальное число массива = ${Math.min(...arr)}`);



//------2 задание------
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
// Метод increment должен увеличивать значение счетчика на 1, 
// а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let counter = 0;

    return {
        checkCounter() { // - метод внутри объекта для проверки счетчика
            console.log(`Счетчик = ${counter}`);
        },

        increment() {
            ++counter;
        },

        decrement() {
            --counter;
        }
    }
}

const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

counter.decrement(); // 2
counter.decrement(); // 1
counter.decrement(); // 0
counter.decrement(); // -1

counter.checkCounter(); // проверим значение счетчика



//------3 задание------
// Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

function factorial(number) {
    if(number <= 1) {
        return 1;
    }
    return factorial(number - 1) * number;
}

console.log(`Факториал числа 0 = ${factorial(0)}`);
console.log(`Факториал числа 4 = ${factorial(4)}`);