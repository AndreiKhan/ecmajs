//------1 задание------
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }

    constructor(name) {
        this.name = name;
    }
}

class Manager extends Employee{
    displayInfo() {
        console.log(`Name: ${this.name}\nDepartment: ${this.department}`);
    }

    constructor(name, department) {
        super();
        this.name = name;
        this.department = department;
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();


//------2 задание------
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    products = [];

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        console.log(`Создан заказ: ${orderNumber}`);
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Добавлен товар: ${product.name}`);
    }

    getTotalPrice() {
        let price = 0;

        this.products.forEach(element => {
            price += element.price;
        });

        return price;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice());



// ------* задание------
// Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". 
// Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.

class Student {
    #name;
    #age;
    #averageGrade;

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setAge(age) {
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    setAverageGrade(averageGrade) {
        this.#averageGrade = averageGrade;
    }

    getAverageGrade() {
        return this.#averageGrade;
    }

    displayInfo() {
        console.log(`Student name: ${this.#name}\nStudent age: ${this.#age}\nStudent average grade: ${this.#averageGrade}`);
    }
}

const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();