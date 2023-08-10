//------1 задание------
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title = 'BookName';
    author = 'AuthorName';
    pages = 100;

    constructor() {}

    displayInfo = () => {
        console.log(`Название книги: ${this.title}, Автор книги: ${this.author}, Количество страниц: ${this.pages}`);
    }
}

const MyBook = new Book();

console.log(MyBook.title);
console.log(MyBook.author);
console.log(MyBook.pages);

MyBook.displayInfo();



//------2 задание------
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo = () => {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    }
}

const MyStudent1 = new Student('John Smith', 16, '10th grade');
MyStudent1.displayInfo();

const MyStudent2 = new Student('Jane Doe', 17, '11th grade');
MyStudent2.displayInfo();



// ------* задание------
// Это расширенная версия задачи с банком, которую мы решлали на семинаре:
// Создайте класс "Банк", который будет иметь следующие свойства: 
// название банка, список клиентов и список счетов. 
// Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, 
// пополнения счета, снятия денег со счета и проверки баланса.

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
    }

    clientList = [];
    bankAccountList = [];

    addClient = (client) => {
        this.clientList.push(client);
    }

    openAccount = (client, balance) => {
        this.bankAccountList.push({
            name: client.name,
            age: client.age,
            balance: balance,
            accountNumber: 123456789 // здесь сделаем номер сразу готовым так как номера надо как то генерировать и знать заранее(костыль для работы)
        })
    }

    deposit = (accountNumber, amount) => {
        this.bankAccountList.forEach((acc) => {

            if(acc.accountNumber === accountNumber) {
                acc.balance += amount;
                console.log(`Deposited ${amount} into account ${acc.accountNumber}. New balance: ${acc.balance}`);
            }
        });
    }

    withdraw = (accountNumber, amount) => {
        this.bankAccountList.forEach((acc) => {

            if(acc.accountNumber === accountNumber) {

                if (acc.balance >= amount) {
                    acc.balance -= amount;
                    console.log(`Withdrawn ${amount} from account ${acc.accountNumber}. New balance: ${acc.balance}`);
        
                } else {
                    console.log(`Insufficient funds in account ${acc.accountNumber}`);
                }
            }
        });
    }

    checkBalance = (accountNumber) => {
        this.bankAccountList.forEach((acc) => {

            if(acc.accountNumber === accountNumber) {
                console.log(`Balance: ${acc.balance}`);
            }
        });
    }
}

class Client {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);

bank.deposit(123456789, 200);
bank.checkBalance(123456789);